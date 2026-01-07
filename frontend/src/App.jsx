import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
