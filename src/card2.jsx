import React from 'react';
import './card2.css';

const Card = ({ title, image }) => {
  return (
    
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
    </div>
  );
};

export default Card;