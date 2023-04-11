import React from "react";
import './SingleImage.css'

const SingleImage = ({card, handleChoice, flipped}) => {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card" >
      <div className={flipped ? 'flipped' : ''}>
        <img
          src={card.src}
          className="front"
          alt="card front image"
          width={200}
        />
        <img
          src="/img/cover.png"
          className="back"
          alt="card back image"
          width={200}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleImage;
