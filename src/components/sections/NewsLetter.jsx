import React from "react";
import bgImage from "../../../public/images/intro-bg.png";
import Container from "../ui/Container";

export default function NewsLetter() {
  return (
    <>
      <Container className="absolute left-0 right-0 -top-32">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="py-3 lg:py-20 bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-blue-400/70"></div>{" "}
          <div className="relative grid lg:grid-cols-2 px-10 justify-center items-center">
            <div className="flex-1">
              <h1 className="text-[32px] text-center lg:text-start my-3 lg:text-[46px] font-bold">
                Subscribe to Our News Letter
              </h1>
            </div>
            <div className="flex-1 lg:relative flex flex-col">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="py-5 px-5 w-[100%] rounded-lg my-3 lg:rounded-full"
              />
              <button className="uppercase font-bold bg-[#eb753b] py-4 px-10 rounded-lg lg:rounded-full lg:absolute right-1 top-4">
                Subscribe Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
