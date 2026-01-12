import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

//  Get all doctors
export const getAllDoctors = () => API.get("/doctor");

//  Get one doctor by ID
export const getDoctorById = (id) => API.get(`/doctor/${id}`);

// //  Create doctor
// export const createDoctor = (data) => API.post("/doctor", data);
