import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Status + Experience */}
      <div className="flex gap-2 mt-4">
        <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          {doctor.status}
        </span>
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
          {doctor.experience}
        </span>
      </div>

      {/* Info */}
      <h3 className="mt-3 font-semibold text-lg">
        {doctor.name}
      </h3>
      <p className="text-sm text-gray-500">
        {doctor.degree}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Reg No: {doctor.reg}
      </p>

      {/* Button */}
      <button className="mt-4 w-full border border-blue-500 text-blue-600 py-2 rounded-full hover:bg-blue-50 transition">
        View Details
      </button>
    </div>
  );
};

export default DoctorCard;
