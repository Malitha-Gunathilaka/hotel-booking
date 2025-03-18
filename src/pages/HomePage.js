import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import RoomCard from '../components/RoomDetails';
import '../styles/HomePage.css';
import image1 from '../assets/image1.jpg';
import { roomsData } from '../data/roomsData';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const [rooms] = useState([
    {
      id: 1,
      name: 'Deluxe Room',
      price: 200,
      image: 'image1',
      description: 'Luxury room with lake view',
      capacity: 2,
    },
    // Add more room data as needed
  ]);

  return (
    <div className={`home-page ${theme}`}>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Aqua Pearl Lake Resort</h1>
          <p>Experience luxury and comfort at its finest</p>
          <button className="book-now-btn">Book Now</button>
        </div>
        <img
          className="hero-image"
          src={image1} // Update image path
          alt="Luxury Hotel"
        />
      </header>

      <section className="rooms-section">
        <h2>Available Rooms</h2>
        <p>Browse our selection of comfortable and stylish rooms.</p>
        <div className="room-list">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Hotel Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-wifi"></i>
            <h3>Free WiFi</h3>
          </div>
          <div className="feature-card">
            <i className="fas fa-swimming-pool"></i>
            <h3>Swimming Pool</h3>
          </div>
          <div className="feature-card">
            <i className="fas fa-utensils"></i>
            <h3>Restaurant</h3>
          </div>
          <div className="feature-card">
            <i className="fas fa-spa"></i>
            <h3>Spa</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;