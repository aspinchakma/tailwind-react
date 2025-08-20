import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
