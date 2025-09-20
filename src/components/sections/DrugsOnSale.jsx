import Container from "../ui/Container";
import { PRODUCTS } from "../../data/products";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import bgImage from "../../../public/images/product-banner.png";
import { Link } from "react-router-dom";
import Section from "../ui/Section";

function DrugsOnSale() {
  const shopNowText = "Shop Now";
  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 container-xl mx-auto">
        <div>
          <FeaturedProducts items={PRODUCTS} cols="lg:grid-cols-2" />
        </div>
        <Section>
          <div className="relative">
            <img src={bgImage} alt="" className="h-96 lg:h-[810px] w-full rounded-md" />

            <div className="absolute top-20 w-full flex flex-col items-center">
              <p className="badge uppercase text-[14px] font-bold">best sale</p>
              <h2 className="text-[24px] lg:text-[52px] font-bold leading-[1.2] my-2 py-2 text-center">
                50% off on all product
              </h2>
              <Link className="uppercase text-[20px] font-bold underline">
                {shopNowText}
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default DrugsOnSale;
