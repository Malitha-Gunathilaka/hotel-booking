// src/pages/BookingPage.js
import React, { useState } from 'react';
import { bookRoom } from '../services/api';

const BookingPage = () => {
  const [roomId, setRoomId] = useState('');
  const [guestName, setGuestName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    bookRoom(roomId, guestName)
      .then(() => alert('Room booked successfully!'))
      .catch((error) => console.error('Error booking room:', error));
  };

  return (
    <div>
      <h1>Book a Room</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Room ID:
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Guest Name:
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingPage;
