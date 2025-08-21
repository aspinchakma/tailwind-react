import { useState } from "react";
import BookMarksContainer from "../Components/BookMarksContainer";
import Header from "../Components/Header";
import Blogs from "./Blogs";

const Home = () => {
  const [bookmars, setBookmarks] = useState([]);
  const addBookMark = (blog) => {
    console.log(blog);
    setBookmarks([...bookmars, blog]);
  };
  return (
    <div>
      <Header></Header>
      <main className="grid lg:grid-cols-4 gap-5 mt-7">
        <div className="lg:col-span-3">
          <Blogs addBookMark={addBookMark}></Blogs>
        </div>
        <h2 className="border border-black">
          <BookMarksContainer bookmars={bookmars}></BookMarksContainer>
        </h2>
      </main>
    </div>
  );
};

export default Home;
