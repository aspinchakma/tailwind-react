import Header from "../Components/Header";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid lg:grid-cols-4 gap-5 mt-7">
        <div className="col-span-3">
          <Blogs></Blogs>
        </div>
        <h2 className="border border-black">
          Hello, this is reading component
        </h2>
      </div>
    </div>
  );
};

export default Home;
