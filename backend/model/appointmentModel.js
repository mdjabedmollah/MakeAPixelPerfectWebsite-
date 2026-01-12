import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
      trim: true,
    },
    degree: {
      type: String,
      required: true,
    },
    fee: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
