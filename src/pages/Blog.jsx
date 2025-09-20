// import Section from "../components/ui/Section";
import blogData from "../data/blogposts";
import BlogComponent from "../components/sections/BlogComponent";

export default function Blog() {
  return (
    <>
      <BlogComponent items={blogData.posts} limit={6} title="Blog" />
    </>
  );
}
