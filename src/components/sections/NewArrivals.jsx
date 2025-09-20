import React from "react";
import Container from "../ui/Container";
import data from "../../data/topcategories";

function NewArrivals() {
  return (
    <>
      <Container className="mt-10">
        <div>
          <h1 className="badge">Arrival</h1>
          <h2>New Arrivals</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {data.products.map((item, index) => (
            <div key={index} className="border">
              <div className="">
                <h6>{item.discount}</h6>
                <div
                  className="bg-cover bg-center h-52 flex flex-col items-center relative transition-transform duration-300 hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="flex justify-around gap-5 my-2 absolute bottom-0">
                    <p className="badge">Cart</p>
                    <p className="badge">Quick</p>
                    <p className="badge">Add</p>
                  </div>
                </div>
              </div>

              <div className="border-t">
                <h5>{item.discount}</h5>
                <h4>{item.category}</h4>
                <h5>$8.50</h5>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default NewArrivals;
