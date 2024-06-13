import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterSheet from "./CharacterSheet.jsx";
import '../index.scss';

const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [editedNoteText, setEditedNoteText] = useState('');

  useEffect(() => {
    const fetchCampaign = async () => {
      const campaignData = {
        id,
        name: `Campaign ${id}`,
        description: `Description for Campaign ${id}`,
        characterSheet: {} // Placeholder for characterSheet data
      };
      setCampaign(campaignData);
      setNotes([
        'Do NOT trust the innkeeper.',
        'The bed was lumpy, -1 to saving throws.',
        'Small hands, good for thieving.'
      ]);
    };
    fetchCampaign();
  }, [id]);

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

  if (!campaign) {
    return <p>Loading...</p>;
  }

  return (
    <div className="campaign-details">
      <h2>{campaign.name}</h2>
      <p>{campaign.description}</p>
      <div className="details-container">
        <CharacterSheet character={campaign.characterSheet} />
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
  );
};

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