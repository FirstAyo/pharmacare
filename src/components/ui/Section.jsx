export default function Section({ id, title, sub, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-xl">
        {title && <h2 className="section-title">{title}</h2>}
        {sub && <p className="section-sub">{sub}</p>}
        <div className="">{children}</div>
      </div>
    </section>
  );
}
