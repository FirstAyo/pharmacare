import Section from "../components/ui/Section";
import { useCart } from "../context/CartContext";
export default function Cart() {
  const { items, total, add, decrement, remove, clear } = useCart();
  return (
    <Section title="Your Cart" sub="Review items and proceed to checkout.">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.length === 0 ? (
            <div className="card">Your cart is empty.</div>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="card flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-slate-100" />
                  <div className="flex-1">
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-sm text-slate-600">
                      ${it.price.toFixed(2)} each
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-full px-3 py-2 bg-white ring-1 ring-slate-200 hover:bg-slate-50"
                      onClick={() => decrement(it.id)}
                    >
                      -
                    </button>
                    <div className="min-w-[2ch] text-center font-semibold">
                      {it.qty}
                    </div>
                    <button
                      className="rounded-full px-3 py-2 bg-white ring-1 ring-slate-200 hover:bg-slate-50"
                      onClick={() =>
                        add({ id: it.id, title: it.title, price: it.price })
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="w-24 text-right font-semibold">
                    ${(it.qty * it.price).toFixed(2)}
                  </div>
                  <button
                    className="text-sm text-slate-500 hover:text-red-600"
                    onClick={() => remove(it.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <aside className="card h-fit">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl">Summary</h3>
            <button
              className="text-sm text-slate-500 hover:text-slate-900"
              onClick={clear}
            >
              Clear
            </button>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Taxes & fees</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4 flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <a href="/checkout" className="btn btn-primary mt-4 w-full">
            Checkout
          </a>
          <p className="text-xs text-slate-500 mt-2">
            Checkout flow not implemented—this displays totals only.
          </p>
        </aside>
      </div>
    </Section>
  );
}
