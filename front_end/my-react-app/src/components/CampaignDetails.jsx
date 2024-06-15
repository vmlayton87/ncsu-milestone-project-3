import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getToken } from "../utils/auth"
import { jwtDecode } from "jwt-decode"
import CharacterSheet from "./CharacterSheet.jsx"
import '../index.scss'

// Steps to implement dm/player view:
// - add states to manage campaign data, user role, and character sheets
// - Fetch the necessary data based on the campaign and user role
// - Render the views conditionally based on the isDungeonMaster user role.
// Heavy leaning on chatGPT for this feature.

const CampaignDetails = () => {
  const { id } = useParams();
  const token = getToken();
  const decodedToken = jwtDecode(token);
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [isDungeonMaster, setIsDungeonMaster] = useState(false);
  const [playerCharacterSheet, setPlayerCharacterSheet] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [editedNoteText, setEditedNoteText] = useState('');

  useEffect(() => {
    const fetchCampaignData = async () => {

      try {
        const response = await fetch(`http://127.0.0.1:5000/campaigns/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const campaignData = await response.json();
        setCampaign(campaignData);

        if (campaignData.dm === decodedToken.sub.userId) {
          setIsDungeonMaster(true);
          try {
            const response = await fetch(`http://127.0.0.1:5000/campaigns/${id}/characters`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            if (!response.ok) {
              throw new Error(`HTTP Error: ${response.status}`);
            }
            const fetchedCharacters = await response.json();
            setCharacters(fetchedCharacters);
            console.log('dm1:',campaignData.dm)//debug
          } catch (error) {
            console.log('Error:', error.message);
          }
          
        } else {
          setIsDungeonMaster(false);
          try {
            const response = await fetch(`http://127.0.0.1:5000/campaigns/${id}/characters`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            if (!response.ok) {
              throw new Error(`HTTP Error: ${response.status}`);
            }
            const fetchedCharacters = await response.json();
            const playerCharacter = fetchedCharacters.find(character => character.user.id === decodedToken.sub.userId);
            setPlayerCharacterSheet(playerCharacter);

            console.log('playerCharacter',playerCharacter);//debug
            console.log('fetchedCharacters',fetchedCharacters);//debug
            console.log('dm2:',campaignData.dm)//debug


            // const playerCharacter = await fetchPlayerCharacterForCampaign(id); // Replace with actual API call
            // setPlayerCharacterSheet(playerCharacter);
            // setNotes(playerCharacter.notes || []);
          } catch (error) {
            console.log('Error:', error.message);
          }
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchCampaignData();
  }, []);

  // const fetchCampaign = async (campaignId) => {
  //   return {
  //     id: campaignId,
  //     name: `Campaign ${campaignId}`,
  //     description: `Description for Campaign ${campaignId}`,
  //     isDungeonMaster: true // Replace with actual role check
  //   };
  // };

  // const fetchAllCharactersForCampaign = async (campaignId) => {
  //   return [
  //     {
  //       id: 1,
  //       name: 'Player 1',
  //       class: 'Wizard',
  //       level: 5,
  //       health: 30,
  //       armorClass: 15,
  //       speed: 30,
  //       passivePerception: 12,
  //       image: 'path/to/image1.jpg' // Replace with actual image URL from the database. A default background color renders if no image is provided.
  //     },
  //     {
  //       id: 2,
  //       name: 'Player 2',
  //       class: 'Rogue',
  //       level: 3,
  //       health: 25,
  //       armorClass: 14,
  //       speed: 35,
  //       passivePerception: 15,
  //       image: 'path/to/image2.jpg' // Need to replace this image url as well.
  //     }
  //   ];
  // };

  // const fetchPlayerCharacterForCampaign = async (campaignId) => {
  //   return {
  //     name: 'Your Character',
  //     class: 'Bard',
  //     level: 4,
  //     health: 28,
  //     armorClass: 13,
  //     speed: 30,
  //     passivePerception: 14,
  //     image: null, // No image available
  //     notes: [
  //       'Note 1: Do NOT trust the innkeeper.',
  //       'Note 2: The bed was lumpy, -1 to saving throws.',
  //       'Note 3: Small hands, good for thieving.'
  //     ]
  //   };
  // };

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote.trim()]);
      setNewNote('');
    }
  };

  const handleEditNote = (index) => {
    setEditingNote(index);
    setEditedNoteText(notes[index]);
  };

  const handleSaveEditedNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNoteText.trim();
    setNotes(updatedNotes);
    setEditingNote(null);
    setEditedNoteText('');
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    setNotes(updatedNotes);
  };

  const handleCharacterClick = (characterId) => {
    navigate(`/character/${characterId}`); // Navigate to the character sheet view
  };

  if (!campaign) {
    return <p>Loading...</p>;
  }

  return (
    <div className="campaign-details">
      <h2>{campaign.name}</h2>
      <p>{campaign.description}</p>
      <div className="details-container">
        {isDungeonMaster ? (
          <>
            <h3>Character Sheets</h3>
            <div className="character-snapshots">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className="character-snapshot card"
                  onClick={() => handleCharacterClick(character.id)}
                  style={{ backgroundImage: character.image ? `url(${character.image})` : 'url(https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                >
                  {!character.image && (
                    <div className="placeholder">
                      <h4 className="card-title">{character.name}</h4>
                      <p className="card-text">Health: {character.health}</p>
                      <p className="card-text">Armor Class: {character.armorClass}</p>
                      <p className="card-text">Speed: {character.speed}</p>
                      <p className="card-text">Passive Perception: {character.passivePerception}</p>
                    </div>
                  )}
                  {character.image && (
                    <div className="card-body">
                      <h4 className="card-title">{character.name}</h4>
                      <p className="card-text">Health: {character.health}</p>
                      <p className="card-text">Armor Class: {character.armorClass}</p>
                      <p className="card-text">Speed: {character.speed}</p>
                      <p className="card-text">Passive Perception: {character.passivePerception}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <CharacterSheet character={playerCharacterSheet} />
        )}
        
        {/* following is the notes section */}
        <div className="notes-section">
          <h3>Notes</h3>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter your notes here..."
          />
          <button onClick={handleAddNote}>Add Note</button>
          <div className="saved-notes">
            <h4>Saved Notes</h4>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>
                  {editingNote === index ? (
                    <>
                      <textarea
                        value={editedNoteText}
                        onChange={(e) => setEditedNoteText(e.target.value)}
                      />
                      <button onClick={() => handleSaveEditedNote(index)}>Save</button>
                    </>
                  ) : (
                    <>
                      <p>{note}</p>
                      <button onClick={() => handleEditNote(index)}>Edit</button>
                      <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails;


// Placeholder character sheet data:
// characterSheet: {
//                     basicInfo: {
//                         name: 'Tav',
//                         class: 'Bard',
//                         level: 5,
//                         race: 'Human',
//                         alignment: 'Neutral Good'
//                     },
//                     attributes: {
//                         strength: 8,
//                         dexterity: 14,
//                         constitution: 12,
//                         intelligence: 10,
//                         wisdom: 10,
//                         charisma: 16
//                     },
//                     skills: {
//                         acrobatics: 5,
//                         animalHandling: 0,
//                         arcana: 0,
//                         athletics: 4,
//                         deception: -1,
//                         history: 0,
//                         insight: 0,
//                         intimidation: 5,
//                         investigation: 0,
//                         medicine: -10,
//                         nature: 0,
//                         perception: 2,
//                         performance: 10,
//                         persuasion: 4,
//                         religion: 0,
//                         sleightOfHand: 5,
//                         stealth: 0,
//                         survival: 4,
//                     },
//                     equipment: [
//                         'Lute',
//                         'Dagger',
//                         'Explorer Pack',
//                     ],
//                 }