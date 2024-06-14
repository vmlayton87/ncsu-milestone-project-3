import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getToken } from "../utils/auth";
import { DnDCharacterStatsSheet, DnDCharacter } from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'
import Gideon from "../testCharacters/gideon.json"

class CharacterSheet extends Component {
  render() {
    return <DnDCharacterStatsSheet character={Gideon}/>
  }
}

const CharacterSheetApp = () => {

  const token = getToken();

  const characterId = useParams();
  const characterIdString = characterId.id;

  const [character, setCharacter] = useState({});

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

  function updateCharacter (character) {
    setCharacter(character)
    localStorage.setItem('dnd-character-data', JSON.stringify(character))
  }

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
    </div>
  );
}

export default CharacterSheetApp;