import React from "react";
import './SingleImage.css'

const SingleImage = ({card, handleChoice, flipped, disabled}) => {

  const handleClick = () => {
    if(!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card" >
      <div className={flipped ? 'flipped' : ''}>
        <img
          src={card.src}
          className="front"
          alt="card front image"

        />
        <img
          src="/img/cover.png"
          className="back"
          alt="card back image"

          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleImage;
