import React from "react";
import BlogComponent from "./BlogComponent";
import blogData from "../../data/blogposts";
import Container from "../ui/Container";

export default function HomeBlogSection() {
  return (
    <>
      <section className="bg-[#02afe5] text-white py-28 text-center">
        <Container>
          <p className="badge uppercase font-bold">Read Blog</p>
          <h2 className="text-[52px] font-semibold">Recent Blog</h2>
          <BlogComponent items={blogData.posts} />
        </Container>
      </section>
    </>
  );
}
