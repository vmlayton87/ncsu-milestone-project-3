import React, { Component, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { getToken } from "../utils/auth";
import { DnDCharacterStatsSheet, DnDCharacter } from 'dnd-character-sheets';
import 'dnd-character-sheets/dist/index.css';
import Gideon from "../testCharacters/gideon.json";

// class CharacterSheet extends Component {
//   render() {
//     return <DnDCharacterStatsSheet character={Gideon}/>
//   }
// }

const CharacterSheetApp = () => {

  const token = getToken();
  const navigate = useNavigate();

  const characterId = useParams();
  const characterIdString = characterId.id;

  const [character, setCharacter] = useState({
    name:''
  });

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/characters/${characterIdString}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const returnedCharacter = await response.json();
        setCharacter(returnedCharacter);
      } catch (error) {
        console.log('Error:',error.message);
      }
    };
    fetchData();
  }, []);

  function updateCharacter (updatedCharacter) {
    setCharacter(updatedCharacter)
    // localStorage.setItem('dnd-character-data', JSON.stringify(character))
  }

  const handleImageUrlChange = (e) => {
    setCharacter({ ...character, image: e.target.value });
  };

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

  const handleUpdateButton = async () => {
    try {

      const flattedCharacter = flattenObject(character);
      console.log('flattedCharacter',flattedCharacter);

      const response = await fetch(`http://127.0.0.1:5000/characters/${characterIdString}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(flattedCharacter)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Character updated successfully:', data);
      navigate('/characters');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // const [character, setCharacter] = useState<DnDCharacter>(loadDefaultCharacter())

  const statsSheet = (
    <DnDCharacterStatsSheet
      character={character}
      onCharacterChanged={updateCharacter}
    />
  )

  // function loadDefaultCharacter () {
  //   let character = {}
  //   const lsData = localStorage.getItem('dnd-character-data')
  //   if (lsData) {
  //     try {
  //       character = JSON.parse(lsData)
  //     } catch {}
  //   }
  //   return character
  // }

  // function exportCharacter () {
  //   const json = JSON.stringify(character, null, 2)
    //push to database here
  // }
  //The GET method should be assigned to a variable at some point, which is then when we'll call this function
  // function loadCharacter(json) {
  //   try {
  //     var result = JSON.parse(typeof json === 'string' ? json : '{}');
  //     if (!Array.isArray(result) && typeof result === 'object') {
  //       updateCharacter(result)
  //     } else {
  //       window.alert('Json file does not contain a DnD character.')
  //     }
  //   }
  //   catch {
  //     window.alert('Json file does not contain a DnD character.')
  //   }
  // }
  return (
    <div className="character-sheet-container">
      {statsSheet}
      <Form.Group controlId="image">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter character image URL"
          value={character.image}
          onChange={handleImageUrlChange}
        />
      </Form.Group>
      <Button onClick={handleUpdateButton} style={{ marginTop: '20px' }}> Update </Button>
    </div>
    
  );
}

export default CharacterSheetApp;