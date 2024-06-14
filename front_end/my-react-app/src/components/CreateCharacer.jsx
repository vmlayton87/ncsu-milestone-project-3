import React, { useState } from 'react';
import { DnDCharacterStatsSheet } from 'dnd-character-sheets';
import 'dnd-character-sheets/dist/index.css';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../index.scss';

const CreateCharacter = () => {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    level: 1,
    race: '',
    alignment: '',
    abilities: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    },
    skills: [],
    equipment: []
  });

  const navigate = useNavigate();

  const updateCharacter = (updatedCharacter) => {
    console.log('Character updated:', updatedCharacter); // Debugging line
    setCharacter(updatedCharacter);
  };

  const saveCharacter = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
        },
        body: JSON.stringify(character)
      });

      if (response.ok) {
        navigate('/characters');
      } else {
        console.log('Failed to save character');
      }
    } catch (error) {
      console.log('Error saving character:', error);
    }
  };

  return (
    <Container className="create-character-page">
      <h2>Create New Character</h2>
      <DnDCharacterStatsSheet character={character} onCharacterChanged={updateCharacter} />
      <div className="button-container">
        <Button variant="primary" onClick={saveCharacter}>Save Character</Button>
      </div>
    </Container>
  );
};

export default CreateCharacter;
