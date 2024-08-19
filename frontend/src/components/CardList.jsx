import React from 'react';
import './CardList.css';

const CardList = ({ cards }) => {
  return (
    <div className="card-list-container">
      {cards.length > 0 ? (
        cards.map((card) => (
          <div key={card._id} className="card-item">
            <h3>{card.title}</h3>
            <hr />
            <p>{card.description}</p>
          </div>
        ))
      ) : (
        <p>No cards available.</p>
      )}
    </div>
  );
};

export default CardList;
