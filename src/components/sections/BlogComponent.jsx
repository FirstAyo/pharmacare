import React from "react";
import Section from "../ui/Section";

export default function BlogComponent({ items = [], limit = 3, title = "" }) {
  const list = limit ? items.slice(0, limit) : items;

  return (
    <Section title={title}>
      <div className="grid md:grid-cols-3 gap-4">
        {list.map((p) => (
          <article key={p.id} className="card">
            <div className="aspect-video rounded-xl bg-slate-100" />
            <h3 className="my-5 font-semibold text-slate-600">{p.title}</h3>
            <p className="text-sm text-slate-600">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
