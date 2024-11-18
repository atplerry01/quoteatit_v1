import BlogComponent from "@/components/blog/BlogComponent";
import Layout from "@/components/Layout/Layout";
import React from "react";

const BlogPage = () => {
  return (
    <Layout pageTitle="Blog Page">
      <BlogComponent />
    </Layout>
  );
};

export default BlogPage;
