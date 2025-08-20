import BookMarksContainer from "../Components/BookMarksContainer";
import Header from "../Components/Header";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <main className="grid lg:grid-cols-4 gap-5 mt-7">
        <div className="lg:col-span-3">
          <Blogs></Blogs>
        </div>
        <h2 className="border border-black">
          <BookMarksContainer></BookMarksContainer>
        </h2>
      </main>
    </div>
  );
};

export default Home;
