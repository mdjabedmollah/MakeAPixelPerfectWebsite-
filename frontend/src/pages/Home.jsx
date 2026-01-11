
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import BestDoctors from "../components/BestDoctors";
import doctors from "../data/DoctorData";

const Home = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (query) => {
    const result = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(result);
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <BestDoctors doctors={filteredDoctors} />
    </>
  );
};

export default Home;

// import React from "react";
// import HeroSection from "../components/HeroSection";
// import BestDoctors from "../components/BestDoctors";
// import StatsSection from "../components/StatsSection";

// const Home = () => {
//   return (
//     <div>
//       <HeroSection />
//       <BestDoctors />
//       <StatsSection/>
//     </div>
//   );
// };

// export default Home;
