import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import BestDoctors from "../components/BestDoctors";
import { getAllDoctors } from "../api/DoctorApi";

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDoctors()
      .then((res) => {
        setDoctors(res.data.data);
        setFilteredDoctors(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const result = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(result);
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading doctors...
      </div>
    );
  }

  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <BestDoctors doctors={filteredDoctors} />
    </>
  );
};

export default Home;
