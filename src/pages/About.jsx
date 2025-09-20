import Container from "../components/ui/Container";
// import Section from "../components/ui/Section";
import bgImage from "../../public/images/about-bg.jpg";
import sideImg from "../../public/images/about-image1.jpg";
import bottomImg from "../../public/images/about-image2.jpg";
import PercentCount from "../components/sections/PercentCount";
import JoinCommunity from "../components/sections/JoinCommunity";
import playBtn from "../../public/images/play.svg";
import videoBg from "../../public/images/about-video-image.jpg";
import { Link } from "react-router-dom";

export default function About() {
  const countPercent = [
    { title: "Furniture", count: "70%", width: "w-[70%]" },
    { title: "Handmade", count: "52%", width: "w-[52%]" },
    { title: "Crafts", count: "80%", width: "w-[80%]" },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-80 bg-cover bg-center flex flex-col justify-center"
      >
        <Container className="text-white text-center">
          <div>
            <h1 className="text-[64px] font-bold">About PharmaCare</h1>
            <p className="my-5 font-bold text-[20px]">{`Home > About Us`}</p>
          </div>
        </Container>
      </div>

      <Container className="my-20">
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-5 px-3">
          <div>
            <div>
              <div className="mb-8">
                <span className="text-[#B18B5E] font-bold">
                  WE DESIGN FURNITURE
                </span>
                <h2 className="text-[24px] font-bold ">Our Core Divisions</h2>
              </div>
              <p>
                Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula,
                porttitor eu, consequat vitae, eleifend ac enim. Sed cursus
                turpis vitae tortor. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Fusce id
              </p>
            </div>

            <PercentCount items={countPercent} />

            <div className="lg:mt-20">
              <img src={bottomImg} alt="" className="h-auto object-cover" />
            </div>
          </div>

          <div className="">
            <img src={sideImg} alt="" className="h-auto object-cover" />
          </div>
        </div>
      </Container>

      <div className="relative my-28">
        <Link
          to="/about"
          style={{ backgroundImage: `url(${videoBg})` }}
          className="h-[420px] bg-cover bg-center flex justify-center items-center"
        ></Link>

        <div className="bg-white w-24 h-24 flex justify-center items-center rounded-full absolute top-[40%] right-[50%]">
          <Link href="https://www.youtube.com/watch?v=YkfPITD2C8Y">
            <img src={playBtn} alt="" className="text-sm w-7" />
          </Link>
        </div>
      </div>

      <JoinCommunity />
    </>
  );
}
