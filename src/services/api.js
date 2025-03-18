// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchRooms = () => axios.get(`${API_BASE_URL}/rooms`);
export const bookRoom = (roomId, guestName) =>
  axios.post(`${API_BASE_URL}/book-room`, { roomId, guestName });
export const addRoom = (roomData) =>
  axios.post(`${API_BASE_URL}/add-room`, roomData);
export const fetchBookings = () => axios.get(`${API_BASE_URL}/bookings`);
