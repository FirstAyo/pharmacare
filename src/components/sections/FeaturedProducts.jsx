// components/sections/FeaturedGrid.jsx
import Section from "../ui/Section";
import { Link } from "react-router-dom";
import AddToCartButton from "../cart/AddToCartButton";

export default function FeaturedGrid({
  title = "",
  sub = "",
  items = [],
  limit = 4, // optional: only render first N
  cols = "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", // override grid
}) {
  const list = limit ? items.slice(0, limit) : items;

  return (
    <Section title={title} sub={sub}>
      <div className={`grid gap-4 ${cols}`}>
        {list.map((p) => (
          <article key={p.slug || p.id} className="card">
            {/* image or placeholder */}
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="aspect-square rounded-xl object-cover"
              />
            ) : (
              <div className="aspect-square rounded-xl bg-slate-100" />
            )}

            <h3 className="mt-2 font-semibold">{p.title}</h3>

            {typeof p.price !== "undefined" && (
              <div className="price mt-1">${Number(p.price).toFixed(2)}</div>
            )}

            <div className="mt-2 flex gap-2">
              {/* If your data has price/title/id, wire add-to-cart */}
              {p.price != null && (p.slug || p.id) && (
                <AddToCartButton
                  id={p.slug || p.id}
                  title={p.title}
                  price={p.price}
                />
              )}

              {/* If you have a details route */}
              {(p.slug || p.id) && (
                <Link
                  to={`/product/${p.slug || p.id}`}
                  className="btn btn-ghost"
                >
                  Details
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
