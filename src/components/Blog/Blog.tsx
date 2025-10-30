import Image from "next/image";
import MainProfile from "../Pages/HomePage/MainProfile/MainProfile";
import Link from "next/link";
import { blogData } from "../BlogComponent/BlogFakeData";

const Blog = () => {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <div className="about-wrapper mt-40">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 sm:col-span-4 h-full">
            <MainProfile />
          </div>
          <div className="col-span-12 sm:col-span-8">
            <div className="about-right-content  portfolio-global-box">
              <div className="grid grid-cols-2 gap-5">
                {blogData.map((blog, index) => (
                  <Link href={`/blog/${blog.id}`} key={index}>
                    <div className="relative w-full h-[250px] overflow-hidden rounded-md">
                      <Image
                        src={blog.image}
                        alt="blog-image"
                        fill
                        objectFit={"cover"}
                        className="rounded-md transition-transform duration-500 ease-in-out hover:scale-110"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8 px-5">
              <span className="font-bold">⚠️ Disclaimer:</span> This blog
              content is inspired by Programming Hero’s original blog. All
              credit goes to the respective authors and creators. This version
              is shared for educational and learning purposes only.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
