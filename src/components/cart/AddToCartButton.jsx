import { useCart } from "../../context/CartContext";
export default function AddToCartButton({ id, title, price, className = "" }) {
  const { add } = useCart();
  return (
    <button
      type="button"
      className={`btn btn-primary ${className}`}
      onClick={() => add({ id, title, price })}
    >
      Add to cart
    </button>
  );
}
