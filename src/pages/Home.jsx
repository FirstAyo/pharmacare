import Hero from "../components/sections/Hero";
import ServiceStrip from "../components/sections/ServiceStrip";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import data from "../data/topcategories";
import { PRODUCTS } from "../data/products";
import AdBanner from "../components/sections/AdBanner";
import DrugsOnSale from "../components/sections/DrugsOnSale";
import IntroBackground from "../components/sections/IntroBackground";
import HomeBlogSection from "../components/sections/HomeBlogSection";
import JoinCommunity from "../components/sections/JoinCommunity";
export default function Home() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <FeaturedProducts
        title="Top Categories"
        sub="Browse by category"
        items={data.products}
      />
      <AdBanner />
      <FeaturedProducts
        title="Popular right now"
        sub="Customers love these picks."
        items={PRODUCTS}
      />
      <DrugsOnSale />
      <IntroBackground />
      <FeaturedProducts
        title="Latest Products"
        sub="Customers love these picks."
        items={PRODUCTS}
      />
      <HomeBlogSection />
      <JoinCommunity />
    </>
  );
}
