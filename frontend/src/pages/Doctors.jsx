import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { getAllDoctors } from "../api/DoctorApi";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDoctors()
      .then((res) => {
        setDoctors(res.data.data); // backend response
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading doctors...
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Best Doctors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

// import React from "react";
// import doctors from "../data/DoctorData";
// import DoctorCard from "../components/DoctorCard";

// const Doctors = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our Best Doctors
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {doctors.map((doctor) => (
//             <DoctorCard key={doctor.id} doctor={doctor} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Doctors;
