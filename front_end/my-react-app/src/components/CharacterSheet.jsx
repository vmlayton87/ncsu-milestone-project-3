import React, { Component, useState, useEffect } from 'react'
import { DnDCharacterStatsSheet, DnDCharacter } from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'
import Gideon from "../testCharacters/gideon.json"

class CharacterSheet extends Component {
  render() {
    return <DnDCharacterStatsSheet character={Gideon}/>
  }
}

const CharacterSheetApp = (props) => {
  const [character, setCharacter] = useState<DnDCharacter>(loadDefaultCharacter())

  const statsSheet = (
    <DnDCharacterStatsSheet
      character={character}
      onCharacterChanged={updateCharacter}
    />
  )

  function loadDefaultCharacter () {
    let character = {}
    const lsData = localStorage.getItem('dnd-character-data')
    if (lsData) {
      try {
        character = JSON.parse(lsData)
      } catch {}
    }
    return character
  }

  function updateCharacter (character) {
    setCharacter(character)
    localStorage.setItem('dnd-character-data', JSON.stringify(character))
  }

  function exportCharacter () {
    const json = JSON.stringify(character, null, 2)
    //push to database here
  }
  //The GET method should be assigned to a variable at some point, which is then when we'll call this function
  function loadCharacter(json) {
    try {
      var result = JSON.parse(typeof json === 'string' ? json : '{}');
      if (!Array.isArray(result) && typeof result === 'object') {
        updateCharacter(result)
      } else {
        window.alert('Json file does not contain a DnD character.')
      }
    }
    catch {
      window.alert('Json file does not contain a DnD character.')
    }
  }
}

export default CharacterSheet;