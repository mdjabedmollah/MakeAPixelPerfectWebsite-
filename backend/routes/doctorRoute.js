import express from 'express'
import {AdDataDoctor, getAllDoctors, getOneDoctor } from '../controller/DoctorController.js'
const route =express.Router()
route.post('/doctor',AdDataDoctor)
route.get('/doctor',getAllDoctors)

route.get("/doctor/:id", getOneDoctor);
export default route