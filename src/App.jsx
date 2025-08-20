import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
