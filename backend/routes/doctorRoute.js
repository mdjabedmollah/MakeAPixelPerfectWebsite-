import express from 'express'
import AdDataDoctor from '../controller/DoctorController.js'
const route =express.Router()
route.post('/doctor',AdDataDoctor)
export default route