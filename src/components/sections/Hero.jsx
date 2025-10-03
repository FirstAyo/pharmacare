import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { heroDetails } from "../../data/hero";
import { useState, useEffect } from "react";

export default function Hero() {
  const { textDetails } = heroDetails;
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % textDetails.length);
  // const prev = () => setIndex((i) => (i - 1 + textDetails.length) % textDetails.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const { title, description, image, discountImage } = textDetails[index];

  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-mint-50">
      <Container className="pt-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge uppercase">Welcome to PharmaCare</span>
          <h1 className="section-title mt-3">{title}</h1>
          <p className="section-sub">{description}</p>
          <div className="mt-6 flex gap-3">
            <Button as={Link} to="/shop">
              Shop now
            </Button>
            <Link to="/services" className="btn btn-ghost">
              Pharmacy Services
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] relative">
          <img src={image} alt="" />
          <img src={discountImage} alt="" className="absolute top-0 left-20" />
        </div>
      </Container>
    </section>
  );
}
