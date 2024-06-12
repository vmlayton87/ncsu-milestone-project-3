import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterSheet from "./CharacterSheet.tsx";
import '../index.scss';

const CampaignDetails = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [notes, setNotes] = useState('');
    const [savedNotes, setSavedNotes] = useState('');

    useEffect(() => {
        // Fetch campaign data from the backend
        const fetchCampaign = async () => {
            // Replace with actual data fetching
            const campaignData = {
                id,
                name: `Campaign ${id}`,
                description: `Description for Campaign ${id}`,
                characterSheet: {
                    basicInfo: {
                        name: 'Tav',
                        class: 'Bard',
                        level: 5,
                        race: 'Human',
                        alignment: 'Neutral Good'
                    },
                    attributes: {
                        strength: 8,
                        dexterity: 14,
                        constitution: 12,
                        intelligence: 10,
                        wisdom: 10,
                        charisma: 16
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
                        'Lute',
                        'Dagger',
                        'Explorer Pack',
                    ],
                }
            };
            setCampaign(campaignData);
        };
        fetchCampaign();
    }, [id]);

    const handleSaveNotes = () => {
        setSavedNotes(notes);
        // Save notes to backend
    };

    if (!campaign) {
        return <p>Loading...</p>;
    }

    return (
        <div className="campaign-details">
            <h2>{campaign.name}</h2>
            <p>{campaign.description}</p>
            <div className="details-container">
                <CharacterSheet />
                <div className="notes-section">
                    <h3>Notes</h3>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Enter your notes here..."
                    />
                    <button onClick={handleSaveNotes}>Save Notes</button>
                    <div className="saved-notes">
                        <h4>Saved Notes</h4>
                        <p>{savedNotes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;
