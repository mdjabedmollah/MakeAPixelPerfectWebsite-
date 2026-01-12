import Doctor from "../model/DoctorModel.js";

export const AdDataDoctor = async (req, res) => {
  try {
    const { name, degree, registrationNumber, experience, status, image } =
      req.body;

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

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    return res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
export const getOneDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);

   
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    return res.status(200).json({
      success: true,
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
