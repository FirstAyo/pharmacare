import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
const CartCtx = createContext(null);
function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload || {};
    case "add": {
      const { id, title, price } = action.item;
      if (!id) return state;
      const current = state[id] || { id, title, price, qty: 0 };
      return { ...state, [id]: { ...current, qty: current.qty + 1 } };
    }
    case "decrement": {
      const id = action.id;
      const current = state[id];
      if (!current) return state;
      const q = Math.max(0, current.qty - 1);
      const next = { ...state, [id]: { ...current, qty: q } };
      if (q === 0) delete next[id];
      return { ...next };
    }
    case "remove": {
      const next = { ...state };
      delete next[action.id];
      return next;
    }
    case "clear":
      return {};
    default:
      return state;
  }
}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    try {
      const raw = localStorage.getItem("pharma:cart");
      if (raw) dispatch({ type: "hydrate", payload: JSON.parse(raw) });
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("pharma:cart", JSON.stringify(state));
    } catch {}
  }, [state]);
  const items = useMemo(() => Object.values(state), [state]);
  const count = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((a, b) => a + b.qty * b.price, 0),
    [items]
  );
  const api = useMemo(
    () => ({
      items,
      count,
      total,
      add: (item) => dispatch({ type: "add", item }),
      decrement: (id) => dispatch({ type: "decrement", id }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
    }),
    [items, count, total]
  );
  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}
export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
