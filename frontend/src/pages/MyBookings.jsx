import React, { useState } from "react";
import appointmentsData from "../data/appointments";
import DoctorChart from "../components/DoctorChart";

const MyBookings = () => {
  const [appointments, setAppointments] = useState(appointmentsData);

  const handleCancel = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-gray-50 py-16">

      {/*  CHART CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <DoctorChart />
      </div>

      {/*  APPOINTMENTS CONTAINER */}
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">My Today Appointments</h2>
          <p className="mt-2 text-gray-500">
            Our platform connects you with verified, experienced doctors.
          </p>
        </div>

        {/* Appointments */}
        <div className="space-y-6">
          {appointments.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.doctorName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.degree}
                  </p>
                </div>

                <p className="text-gray-500 text-sm">
                  Appointment Fee : {item.fee}
                </p>
              </div>

              <button
                onClick={() => handleCancel(item.id)}
                className="mt-6 w-full border border-red-500 text-red-500 py-3 rounded-full hover:bg-red-50 transition"
              >
                Cancel Appointment
              </button>
            </div>
          ))}

          {appointments.length === 0 && (
            <p className="text-center text-gray-500">
              No appointments for today
            </p>
          )}
        </div>
      </div>

    </section>
  );
};

export default MyBookings;
