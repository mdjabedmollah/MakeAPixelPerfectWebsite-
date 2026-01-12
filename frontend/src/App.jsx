import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import MyBookings from "./pages/MyBookings";
import ContactUs from "./components/ContactUs";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Blogs" element={<Blogs />} /> */}
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/doctors" element={<Doctors />} />
        {/* <Route path="/doctors/:id" element={<DoctorDetails />} /> */}
        <Route path="/doctor/:id" element={<DoctorDetails />} />

        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
