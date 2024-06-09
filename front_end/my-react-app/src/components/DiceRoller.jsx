import React, { useState } from 'react';

const DiceRoller = () => {
  const [result, setResult] = useState('No roll yet');

  const rollDice = (sides) => {
    const roll = Math.floor(Math.random() * sides) + 1;
    setResult(`You rolled a ${roll}`);
  };

  return (
    <div className="dice-roller">
      <h2>Dice Drawer</h2>
      <div className="dice-buttons">
        <button className="d4" onClick={() => rollDice(4)}>Roll d4</button>
        <button className="d6" onClick={() => rollDice(6)}>Roll d6</button>
        <button className="d8" onClick={() => rollDice(8)}>Roll d8</button>
        <button className="d10" onClick={() => rollDice(10)}>Roll d10</button>
        <button className="d12" onClick={() => rollDice(12)}>Roll d12</button>
        <button className="d20" onClick={() => rollDice(20)}>Roll d20</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default DiceRoller;
