import React from 'react';
import BasicInfo from './subcomponents/BasicInfo.jsx';
import Equipment from './subcomponents/Equipment.jsx';
import Skills from './subcomponents/Skills.jsx';
import Attributes from './subcomponents/Attributes.jsx';

const CharacterSheet = ({ character }) => {
  return (
    <div className="character-sheet">
      <BasicInfo info={character.basicInfo} />
      <Attributes attributes={character.attributes} />
      <Skills skills={character.skills} />
      <Equipment equipment={character.equipment} />
    </div>
  )
}

export default CharacterSheet;