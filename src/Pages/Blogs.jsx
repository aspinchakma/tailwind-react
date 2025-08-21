import { useEffect, useState } from "react";
import Blog from "../Components/Blog";

const Blogs = ({ addBookMark, getTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const url = `https://aspinchakma.github.io/api-for-practice/knowledgeCafe.json`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Server Prolem");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    // calling function
    loadData();
  }, []);
  return (
    <>
      {/* Blogs Container */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {blogs.map((blog, index) => (
          <Blog
            key={index}
            addBookMark={addBookMark}
            getTime={getTime}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
