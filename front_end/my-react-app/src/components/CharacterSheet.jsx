import React, { Component } from 'react'

import DnDCharacterStatsSheet from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'

class CharacterSheet extends Component {
  render() {
    return <DnDCharacterStatsSheet />
  }
}

export default CharacterSheet;