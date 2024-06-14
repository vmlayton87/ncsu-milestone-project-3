import React, { useState } from 'react';
import { DnDCharacterStatsSheet } from 'dnd-character-sheets';
import 'dnd-character-sheets/dist/index.css';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getToken } from "../utils/auth";
import '../index.scss';

const CreateCharacter = () => {

  const token = getToken();

  const [character, setCharacter] = useState({
    // name: '',
    // class: '',
    // level: 1,
    // race: '',
    // alignment: '',
    // abilities: {
    //   strength: 10,
    //   dexterity: 10,
    //   constitution: 10,
    //   intelligence: 10,
    //   wisdom: 10,
    //   charisma: 10
    // },
    // skills: [],
    // equipment: []
  });

  const navigate = useNavigate();

  const updateCharacter = (updatedCharacter) => {
    console.log('Character updated:', updatedCharacter); // Debugging line

    // Function to flatten the updatedCharacter object
    const flattenObject = (obj, result = {}) => {
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], result);
          } else {
            result[key] = obj[key];
          }
        }
      }
      return result;
    };

    const flattedUpdatedCharacter = flattenObject(updatedCharacter);
    console.log('Flatted Updated Character:',flattedUpdatedCharacter)
    setCharacter(flattedUpdatedCharacter);
  };

  const saveCharacter = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/characters/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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
