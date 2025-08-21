import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const filterData = async () => {
      try {
        const url = `https://aspinchakma.github.io/api-for-practice/knowledgeCafe.json`;
        const res = await fetch(url);
        const data = await res.json();
        const matchBlog = data.find((blog) => blog.id === Number.parseInt(id));
        setBlog(matchBlog);
      } catch (error) {
        console.log(error);
      }
    };
    filterData();
  }, []);
  return (
    <div>
      <Header />
      {/* Blog Details Container */}
      <div className="mt-7 lg:w-[70%] mx-auto">
        <img className="w-full rounded-[10px]" src={blog?.coverPhoto} alt="" />
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-5">
            <img
              className="w-[70px] rounded-full object-cover"
              src={blog?.authorImage}
              alt=""
            />
            <div>
              <h2 className="text-xl font-bold text-[19px]">
                {blog?.authorName}
              </h2>
              <p className="text-[#707070]">{blog?.postedDate}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <h4 className="text-[#707070]">0{blog?.readingTime} min read</h4>
            <div>
              <FontAwesomeIcon
                icon={faBookmark}
                className="w-6 text-[#707070] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <h1 className="mt-5 mb-0 font-extrabold text-[30px] lg:text-[50px]">
          {blog?.title}
        </h1>
        {/* hashtags */}
        <p className="mb-5">
          {blog?.hashtags?.map((hashtag, index) => (
            <span className=" text-[#707070] text-[22px] mr-3" key={index}>
              {hashtag}
            </span>
          ))}
        </p>
        {/* description */}
        <p className="text-[19px] text-gray-700 leading-10">
          {blog?.description}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
