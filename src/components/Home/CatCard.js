import React from 'react';
import './CatCard.css';
const CatCard = ({ text, image }) => {
  return (
    <div className="catCard">
      <div className="catCard__image">
        <img src={image} alt={text} />
      </div>
      <div className="catCard__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CatCard;
