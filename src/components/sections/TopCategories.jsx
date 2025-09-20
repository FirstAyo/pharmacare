import data from "../../data/topcategories";
import Container from "../ui/Container";

function TopCategories() {
  // const categories = TopCategories
  return (
    <>
      <Container>
        <div>
          <h1 className="badge">Categories</h1>
          <h2>Top categories</h2>
        </div>

        <div className="overflow-x-auto overflow-y-hidden w-full">
          <div className="grid grid-flow-col auto-cols-[250px] gap-4">
            {data.products.map((item, index) => (
              <div
                className="bg-[#cfedf7] flex flex-col items-center rounded-lg"
                key={index}
              >
                <div className="my-10 text-center">
                  <h6 className="uppercase text-orange-500 font-bold">
                    {item.discount}
                  </h6>
                  <h5 className="text-2xl font-bold">{item.category}</h5>
                </div>
                <img src={item.image} alt="" className="object-contain transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default TopCategories;
