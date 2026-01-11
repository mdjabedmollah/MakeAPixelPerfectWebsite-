import React from "react";
import {
  FaUserMd,
  FaStar,
  FaUsers,
  FaUserNurse,
} from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUserMd className="text-3xl text-blue-500" />,
      value: "199+",
      label: "Total Doctors",
    },
    {
      icon: <FaStar className="text-3xl text-yellow-500" />,
      value: "467+",
      label: "Total Reviews",
    },
    {
      icon: <FaUsers className="text-3xl text-pink-500" />,
      value: "1900+",
      label: "Patients",
    },
    {
      icon: <FaUserNurse className="text-3xl text-green-500" />,
      value: "300+",
      label: "Total Stuffs",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We Provide Best Medical Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-500 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
