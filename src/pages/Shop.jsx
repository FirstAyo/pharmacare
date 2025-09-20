import Section from "../components/ui/Section";
import { PRODUCTS } from "../data/products";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/cart/AddToCartButton";
export default function Shop() {
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  return (
    <Section title="Shop">
      <div className="grid md:grid-cols-4 gap-6">
        <aside className="card h-fit">
          <h3 className="font-semibold">Categories</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c}>
                <a className="hover:underline">{c}</a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <article key={p.slug} className="card">
              <div className="aspect-square rounded-xl bg-slate-100" />
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
              <div className="price mt-1">${p.price.toFixed(2)}</div>
              <div className="mt-2 flex gap-2">
                <AddToCartButton id={p.slug} title={p.title} price={p.price} />
                <Link to={`/product/${p.slug}`} className="btn btn-ghost">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
