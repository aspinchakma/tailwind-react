import { useEffect, useState } from "react";
import BookMarksContainer from "../Components/BookMarksContainer";
import Header from "../Components/Header";
import { getValueByKey } from "../utilities/localStorage";
import Blogs from "./Blogs";

const Home = () => {
  const [bookmars, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("bookmark");
    if (data) {
      const dataArray = JSON.parse(data);
      setBookmarks(dataArray);
    }
  }, []);
  const addBookMark = (blog) => {
    const bookMarksFromLS = getValueByKey("bookmark");
    if (!bookMarksFromLS.length) {
      bookMarksFromLS.push(blog.title);
    } else {
      const isExist = bookMarksFromLS.includes(blog.title);
      if (isExist) {
        alert("Already You Added This Topic On BookMark");
      } else {
        bookMarksFromLS.push(blog.title);
      }
    }
    setBookmarks(bookMarksFromLS);
    const bookMarksFromLSStringyFy = JSON.stringify(bookMarksFromLS);
    localStorage.setItem("bookmark", bookMarksFromLSStringyFy);
  };

  useEffect(() => {
    const getTime = localStorage.getItem("readingTime");
    if (!getTime) {
      setSpentTime(0);
    } else {
      const getTimeArray = JSON.parse(getTime);
      setSpentTime(getTimeArray[0]);
    }
  }, []);

  // get time from local storage, update and show ui
  const getTime = (number) => {
    let localStorageData = getValueByKey("readingTime");
    localStorageData.push(number);
    if (localStorageData.length) {
      const sum = localStorageData.reduce((accu, current) => accu + current, 0);
      localStorageData = [sum];
      setSpentTime(sum);
    }
    localStorage.setItem("readingTime", JSON.stringify(localStorageData));
  };

  return (
    <div>
      <Header></Header>
      <main className="grid lg:grid-cols-4 gap-5 mt-7">
        <div className="lg:col-span-3">
          <Blogs addBookMark={addBookMark} getTime={getTime}></Blogs>
        </div>
        <div>
          <BookMarksContainer
            bookmars={bookmars}
            spentTime={spentTime}
          ></BookMarksContainer>
        </div>
      </main>
    </div>
  );
};

export default Home;
