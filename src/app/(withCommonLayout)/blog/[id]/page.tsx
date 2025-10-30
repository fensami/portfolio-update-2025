import BlogComponent from "@/components/BlogComponent/BlogComponent";
import React from "react";

const blogDynamic = () => {
  return (
    <div className="container mx-auto">
      <div className="px-5">
        <BlogComponent />
      </div>
    </div>
  );
};

export default blogDynamic;
