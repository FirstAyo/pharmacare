import Container from "../ui/Container";
export default function ServiceStrip() {
  return (
    <section className="py-8 bg-white">
      <Container>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["🚚", "Free delivery over $50"],
            ["🔒", "Secure checkout"],
            ["💬", "24/7 Pharmacist chat"],
          ].map(([i, t]) => (
            <div
              key={t}
              className="flex items-center gap-3 py-5 px-3 rounded-lg shadow-xl border-4 border-brand-500 bg-brand-400 text-white font-bold"
            >
              <span className="text-xl">{i}</span>
              <p className="font-medium">{t}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
