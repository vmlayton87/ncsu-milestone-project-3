import React, { useState } from 'react';
import d4Image from '../assets/d4.png';
import d6Image from '../assets/d6.png';
import d8Image from '../assets/d8.png';
import d10Image from '../assets/d10.png';
import d12Image from '../assets/d12.png';
import d20Image from '../assets/d20.png';

const DiceRoller = () => {
  const [result, setResult] = useState('No roll yet');

  const rollDice = (sides) => {
    const roll = Math.floor(Math.random() * sides) + 1;
    setResult(`You rolled a ${roll}`);
  };

  return (
    <div className="dice-roller">
      <h2>Dice Roller</h2>
      <div className="dice-buttons">
        <div className="dice-container">
          <span className="dice-label">d4</span>
          <button className="dice-button" onClick={() => rollDice(4)}>
            <img src={d4Image} alt="d4 by DarkAthena on Pixabay" />
          </button>
        </div>
        <div className="dice-container">
          <span className="dice-label">d6</span>
          <button className="dice-button" onClick={() => rollDice(6)}>
            <img src={d6Image} alt="d6 by DarkAthena on Pixabay" />
          </button>
        </div>
        <div className="dice-container">
          <span className="dice-label">d8</span>
          <button className="dice-button" onClick={() => rollDice(8)}>
            <img src={d8Image} alt="d8 by DarkAthena on Pixabay" />
          </button>
        </div>
        <div className="dice-container">
          <span className="dice-label">d10</span>
          <button className="dice-button" onClick={() => rollDice(10)}>
            <img src={d10Image} alt="d10 by DarkAthena on Pixabay" />
          </button>
        </div>
        <div className="dice-container">
          <span className="dice-label">d12</span>
          <button className="dice-button" onClick={() => rollDice(12)}>
            <img src={d12Image} alt="d12 by DarkAthena on Pixabay" />
          </button>
        </div>
        <div className="dice-container">
          <span className="dice-label">d20</span>
          <button className="dice-button" onClick={() => rollDice(20)}>
            <img src={d20Image} alt="d20 by DarkAthena on Pixabay" />
          </button>
        </div>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default DiceRoller;
