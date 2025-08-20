import Header from "../Components/Header";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h3>This is Home Page Brother</h3>
      <div className="grid lg:grid-cols-4 gap-5">
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
