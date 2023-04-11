import React, { useEffect, useState } from "react";
import "../App.css";
import SingleImage from "../components/SingleImage";

const gameImages = [
  {
    src: "/img/css.png", matched:false,
  },
  {
    src: "/img/html.png", matched:false,
  },
  {
    src: "/img/js.png", matched:false,
  },
  {
    src: "/img/react.webp", matched:false,
  },
  {
    src: "/img/ts.png", matched:false,
  },
  {
    src: "/img/tailwind.png", matched:false,
  },
];
const MemoryMagic = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffling up the cards.
  const shuffleCards = () => {
    const shuffledCards = [...gameImages, ...gameImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);
  };

  // Setting up choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  };
  // comparing up the choices.
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card =>{
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn();
      }else{
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }

    }
  },[choiceOne, choiceTwo])

  // resetting the value and increasing turn by 1.
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false)
  }

  // Start game automatically logic
  useEffect(()=>{
    shuffleCards()
  },[])

  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>
      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleImage
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={ card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MemoryMagic;
