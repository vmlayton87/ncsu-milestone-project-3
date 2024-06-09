import React, { useState, useEffect } from 'react';
import BasicInfo from './subcomponents/BasicInfo.jsx';
import Equipment from './subcomponents/Equipment.jsx';
import Skills from './subcomponents/Skills.jsx';
import Attributes from './subcomponents/Attributes.jsx';

const CharacterSheet = () => {
  const [character, setCharacter] = useState({
    basicInfo: {
      name: '',
      class: '',
      level: '',
      race: '',
      alignment: '',
    },
    attributes: {
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
    },
    skills: {
      acrobatics: '',
      animalHandling: '',
      arcana: '',
      athletics: '',
      deception: '',
      deception: '',
      intimidation: '',
      investigation: '',
      medicine: '',
      nature: '',
      perception: '',
      performance: '',
      persuasion: '',
      religion: '',
      sleightOfHand: '',
      stealth: '',
      survival: '',
    },
    equipment: [],
  })

  //This is simulating fetching data from the backend, we'll need to replace with actual data fetching logic

  useEffect(() => {
    const data = {
      basicInfo: {
        name: 'Dr. Chungus, MD',
        class: 'Barbarian',
        level: 6,
        race: 'Dragonborn',
        alignment: 'Chaotic Good',
      },
      attributes: {
        strength: 16,
        dexterity: 10,
        constitution: 14,
        intelligence: 8,
        wisdom: 10,
        charisma: 8,
      },
      skills: {
        acrobatics: 5,
        animalHandling: 0,
        arcana: 0,
        athletics: 4,
        deception: -1,
        history: 0,
        insight: 0,
        intimidation: 5,
        investigation: 0,
        medicine: -10,
        nature: 0,
        perception: 2,
        performance: 10,
        persuasion: 4,
        religion: 0,
        sleightOfHand: 5,
        stealth: 0,
        survival: 4,
      },
      equipment: [
        'Reflex Hammer',
        'Metal Clipboard',
        'Apple',
        'Dagger',
        'Explorer Pack',
      ],
    }
    setCharacter(data)
  }, [])

  return (
    <div className="character-sheet">
      <BasicInfo info={character.basicInfo} />
      <Attributes attributes={character.attributes} />
      <Skills skills={character.skills} />
      <Equipment equipment={character.equipment} />
    </div>
  )
}

export default CharacterSheet