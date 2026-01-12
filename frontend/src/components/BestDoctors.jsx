
import React from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";

const BestDoctors = ({ doctors = [] }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Our Best Doctors</h2>
          <p className="mt-3 text-gray-500">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No doctors found
            </p>
          )}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/doctors"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700"
          >
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestDoctors;


// import React from "react";
// import DoctorCard from "./DoctorCard";
// import { Link } from "react-router-dom";

// const BestDoctors = ({ doctors }) => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold">Our Best Doctors</h2>
//           <p className="mt-3 text-gray-500">
//             Our platform connects you with verified, experienced doctors across
//             various specialties — all at your convenience.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {doctors.length > 0 ? (
//             doctors.map((doctor) => (
//               <DoctorCard key={doctor.id} doctor={doctor} />
//             ))
//           ) : (
//             <p className="col-span-3 text-center text-gray-500">
//               No doctors found
//             </p>
//           )}
//         </div>

//         {/* View All */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/doctors"
//             className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700"
//           >
//             View All Doctors
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestDoctors;
