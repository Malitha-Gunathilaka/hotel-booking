import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { roomsData } from '../data/roomsData';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/RoomDetails.css';

const RoomDetails = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  
  // Improved room finding logic with console logging
  console.log("Looking for room with ID:", id);
  console.log("Available rooms:", roomsData);
  
  const room = roomsData.find(room => room.id === String(id));
  
  if (!room) {
    return (
      <div className="room-not-found">
        <h2>Room not found</h2>
        <p>The requested room {id ? `(${id})` : ''} could not be found.</p>
        <Link to="/" className="back-link">Return to Homepage</Link>
      </div>
    );
  }

  return (
    <div className={`room-details ${theme}`}>
      <div className="room-images">
        <Carousel showThumbs={true} infiniteLoop={true}>
          {room.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${room.name} - View ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="room-info">
        <h1>{room.name}</h1>
        <h2>{room.type}</h2>
        <p className="description">{room.description}</p>
        
        <div className="room-details-grid">
          <div className="detail-item">
            <strong>Price:</strong> ${room.price}/night
          </div>
          <div className="detail-item">
            <strong>Size:</strong> {room.size}m²
          </div>
          <div className="detail-item">
            <strong>Capacity:</strong> {room.capacity} persons
          </div>
          <div className="detail-item">
            <strong>View:</strong> {room.view}
          </div>
        </div>

        <div className="amenities">
          <h3>Amenities</h3>
          <ul>
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;