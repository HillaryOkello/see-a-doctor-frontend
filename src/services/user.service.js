import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:3000';

const getDoctors = () => axios.get(`${API_URL}/doctors`, { headers: authHeader() });
const getDoctor = (id) => axios.get(`${API_URL}/doctors/${id}`, { headers: authHeader() });
const getAppointments = (id) => axios.get(`${API_URL}/users/${id}/appointments`, { headers: authHeader() });
const getAppointment = (userId, appointmentId) => axios.get(`${API_URL}/users/${userId}/appointments/${appointmentId}`, { headers: authHeader() });
const postAppointment = (userId, doctorId, appointmentDate) => axios.post(`${API_URL}/users/${userId}/appointments`, { user_id: userId, doctor_id: doctorId, appointment_date: appointmentDate }, { headers: authHeader() });
const deleteAppointment = (userId, appointmentId) => axios.delete(`${API_URL}/users/${userId}/appointments/${appointmentId}`, { headers: authHeader() });
export default {
  getDoctors,
  getDoctor,
  getAppointments,
  getAppointment,
  postAppointment,
  deleteAppointment,
};
