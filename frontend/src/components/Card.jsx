import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <hr />
      <p className="description">{card.description}</p>
    </div>
  );
};

export default Card;
