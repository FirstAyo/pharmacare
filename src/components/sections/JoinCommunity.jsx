import React from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

export default function JoinCommunity() {
  const joinPharmacare = [
    {
      id: 1,
      title: "Exclusive offers for you",
      excerpt: "Get weekly deals, valuable health information and more.",
      action: "Sign Up",
    },
    {
      id: 2,
      title: "Join Our Community",
      excerpt: "Get weekly deals, valuable health information and more.",
      action: "Join Free Now",
    },
    {
      id: 3,
      title: "Get our FREE app Now!",
      excerpt: "Get weekly deals, valuable health information and more.",
      action: "Get our App",
    },
  ];
  return (
    <>
      <Container className="my-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {joinPharmacare.map((p) => (
            <div
              key={p.id}
              className={`py-10 px-5 flex flex-col gap-5 justify-between ${
                p.id === 1
                  ? "bg-[#e3f4ff]"
                  : p.id === 2
                  ? "bg-[#f9ffe0]"
                  : "bg-[#ffe2e5]"
              }`}
            >
              <h1 className="text-[26px] font-semibold">{p.title}</h1>
              <p>{p.excerpt}</p>
              <Link className="border border-black py-5 text-center w-[60%] uppercase font-semibold">{`${p.action} >`}</Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
