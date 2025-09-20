import { useParams } from "react-router-dom";
import Section from "../components/ui/Section";
import { PRODUCTS } from "../data/products";
import AddToCartButton from "../components/cart/AddToCartButton";
export default function Product() {
  const { slug } = useParams();
  const p = PRODUCTS.find((x) => x.slug === slug) || PRODUCTS[0];
  return (
    <Section title={p.title} sub={p.desc}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-2xl bg-slate-100" />
        <div>
          <div className="price text-3xl">${p.price.toFixed(2)}</div>
          <p className="text-sm text-slate-600 mt-2">
            Category: {p.category} • In stock: {p.stock}
          </p>
          <AddToCartButton
            id={p.slug}
            title={p.title}
            price={p.price}
            className="mt-6"
          />
        </div>
      </div>
    </Section>
  );
}
