import React from "react";
import Container from "../ui/Container";
import introBg from "../../../public/images/intro-bg.png";
import nurseImg from "../../../public/images/review-thumb.png";
import { Link } from "react-router-dom";

function IntroBackground() {
  const GetAppt = " Get Appointment >";
  return (
    <>
      <section className="flex flex-col-reverse gap-5 mt-80 lg:mt-56 relative">
        <div
          className="text-center flex flex-col justify-end items-center bg-cover bg-center h-[650px] text-white pb-36"
          style={{ backgroundImage: `url(${introBg})` }}
        >
          <div className="absolute inset-0 bg-blue-400/70"></div>{" "}
          <div className=" relative">
            <p className="badge uppercase font-bold">important</p>
            <h2 className="text-[32px] lg:text-[52px] font-bold mb-5">
              Ask pharmacist not Internet
            </h2>
            <Link className="text-[16px] uppercase font-bold bg-[#eb753b] py-3 px-5">
              {GetAppt}
            </Link>
          </div>
        </div>

        <Container className="bg-[#a4d5e2] p-3 lg:p-7 w-[80%] mx-auto absolute lg:-top-52 -top-80 left-0 right-0">
          <div className="p-5 lg:grid lg:grid-cols-2 bg-white lg:px-10">
            <div className="flex flex-col justify-center">
              <p className=" lg:text-[20px] font-semibold mb-[35px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                suscipit vel dolores expedita quo, vitae labore minima neque
                possimus amet accusantium aut inventore, officiis nulla.
                Necessitatibus cum non iusto tempora.
              </p>
              <div className="flex flex-row justify-between gap-3">
                <div className="flex flex-row gap-2">
                  <p className="border px-2">left</p>
                  <p className="border px-2">right</p>
                </div>
                <div>
                  <p className="text-[14px] lg:text-[20px] font-semibold">
                    Dr Alex Grant
                  </p>
                  <span className="text-[12px]">Director</span>
                </div>
              </div>
            </div>
            <div>
              <img src={nurseImg} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default IntroBackground;
