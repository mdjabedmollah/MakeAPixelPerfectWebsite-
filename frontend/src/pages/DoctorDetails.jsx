import React from "react";
import { useParams } from "react-router-dom";
import doctors from "../data/DoctorData";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find(
    (item) => item.id === Number(id)
  );

  if (!doctor) {
    return (
      <div className="text-center py-20 text-red-500">
        Doctor not found
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {/* Top Info */}
        <div className="bg-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold">
            Doctor’s Profile Details
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Our platform connects you with verified, experienced doctors
            across various specialties — all at your convenience.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full md:w-72 h-80 object-cover rounded-xl"
          />

          <div className="flex-1">
            <h3 className="text-2xl font-bold">
              {doctor.name}
            </h3>

            <p className="mt-1 text-gray-600">
              {doctor.degree}
            </p>

            <p className="mt-4 text-gray-600">
              <span className="font-medium">Working at</span>
              <br />
              TMSS Medical College & Rafatullah Community Hospital, Bogura
            </p>

            <hr className="my-4" />

            <p className="text-gray-500">
              Reg No: {doctor.reg}
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs bg-orange-100 text-orange-600 rounded-full">
                Sunday
              </span>
              <span className="px-3 py-1 text-xs bg-orange-100 text-orange-600 rounded-full">
                Monday
              </span>
              <span className="px-3 py-1 text-xs bg-orange-100 text-orange-600 rounded-full">
                Thursday
              </span>
            </div>

            <p className="mt-4 text-sm">
              <span className="font-medium">
                Consultation Fee:
              </span>{" "}
              <span className="text-blue-600 font-semibold">
                Taka 273
              </span>{" "}
              <span className="text-gray-400">
                (incl. Vat) Per consultation
              </span>
            </p>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-center mb-4">
            Book an Appointment
          </h3>

          <div className="flex items-center justify-between mb-4">
            <p className="font-medium">Availability</p>
            <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
              Doctor Available Today
            </span>
          </div>

          <div className="bg-orange-50 text-orange-600 text-sm px-4 py-3 rounded-lg mb-6">
            Due to high patient volume, we are currently accepting
            appointments for today only.
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700">
            Book Appointment Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default DoctorDetails;
