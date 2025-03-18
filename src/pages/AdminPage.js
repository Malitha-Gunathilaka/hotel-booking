// src/pages/AdminPage.js
import React, { useState, useEffect } from 'react';
import { addRoom, fetchBookings } from '../services/api';

const AdminPage = () => {
  const [roomData, setRoomData] = useState({ room_number: '', type: '', price: '' });
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings()
      .then((response) => setBookings(response.data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  const handleAddRoom = (e) => {
    e.preventDefault();
    addRoom(roomData)
      .then(() => alert('Room added successfully!'))
      .catch((error) => console.error('Error adding room:', error));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Add Room</h2>
      <form onSubmit={handleAddRoom}>
        <input
          type="text"
          placeholder="Room Number"
          value={roomData.room_number}
          onChange={(e) => setRoomData({ ...roomData, room_number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={roomData.type}
          onChange={(e) => setRoomData({ ...roomData, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={roomData.price}
          onChange={(e) => setRoomData({ ...roomData, price: e.target.value })}
        />
        <button type="submit">Add Room</button>
      </form>

      <h2>All Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            Room {booking.room_id} booked by {booking.guest_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
