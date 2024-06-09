import React, { useState } from 'react';

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
        <button onClick={() => rollDice(4)}>Roll d4</button>
        <button onClick={() => rollDice(6)}>Roll d6</button>
        <button onClick={() => rollDice(8)}>Roll d8</button>
        <button onClick={() => rollDice(10)}>Roll d10</button>
        <button onClick={() => rollDice(12)}>Roll d12</button>
        <button onClick={() => rollDice(20)}>Roll d20</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default DiceRoller;
