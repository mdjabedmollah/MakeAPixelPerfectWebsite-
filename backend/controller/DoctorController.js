import Doctor from "../model/DoctorModel.js";


const AdDataDoctor = async (req, res) => {
  try {
    const {
      name,
      degree,
      registrationNumber,
      experience,
      status,
      image,
    } = req.body;

    //  Validation
    if (!name || !degree || !registrationNumber || !experience) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    //  Check duplicate registration number
    const existingDoctor = await Doctor.findOne({ registrationNumber });
    if (existingDoctor) {
      return res.status(409).json({
        success: false,
        message: "Doctor with this registration number already exists",
      });
    }

    //  Create doctor
    const doctor = await Doctor.create({
      name,
      degree,
      registrationNumber,
      experience,
      status: status || "Available",
      image: image || "",
    });

    return res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      data: doctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default AdDataDoctor;
