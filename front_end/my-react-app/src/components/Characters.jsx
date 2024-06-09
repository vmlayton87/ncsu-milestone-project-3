import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../index.scss';

const Characters = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        const fetchData = async () => {
            // Replace this with actual data fetching logic
            const data = [
                {
                    basicInfo: {
                        name: 'Tav',
                        class: 'Bard',
                        level: 5,
                        race: 'Half-Elf',
                        alignment: 'Chaotic Good',
                    },
                    attributes: {
                        strength: 8,
                        dexterity: 14,
                        constitution: 12,
                        intelligence: 10,
                        wisdom: 10,
                        charisma: 16,
                    },
                    skills: {
                        acrobatics: 5,
                        animalHandling: 0,
                        arcana: 2,
                        athletics: -1,
                        deception: 7,
                        history: 0,
                        insight: 0,
                        intimidation: 3,
                        investigation: 0,
                        medicine: 0,
                        nature: 0,
                        perception: 2,
                        performance: 10,
                        persuasion: 10,
                        religion: 0,
                        sleightOfHand: 5,
                        stealth: 5,
                        survival: 0,
                    },
                    equipment: [
                        'Lute',
                        'Rapier',
                        'Leather Armor',
                        'Dagger',
                        'Explorer\'s Pack',
                    ],
                },
                {
                    basicInfo: {
                        name: 'Aelar',
                        class: 'Rogue',
                        level: 3,
                        race: 'Elf',
                        alignment: 'Neutral Good',
                    },
                    attributes: {
                        strength: 10,
                        dexterity: 18,
                        constitution: 12,
                        intelligence: 14,
                        wisdom: 8,
                        charisma: 10,
                    },
                    skills: {
                        acrobatics: 7,
                        animalHandling: 0,
                        arcana: 1,
                        athletics: 1,
                        deception: 3,
                        history: 2,
                        insight: 3,
                        intimidation: 2,
                        investigation: 4,
                        medicine: 0,
                        nature: 1,
                        perception: 6,
                        performance: 0,
                        persuasion: 4,
                        religion: 0,
                        sleightOfHand: 7,
                        stealth: 9,
                        survival: 1,
                    },
                    equipment: [
                        'Shortsword',
                        'Dagger',
                        'Thieves\' Tools',
                        'Leather Armor',
                        'Explorer\'s Pack',
                    ],
                },
                // Add more character data as needed
            ];
            setCharacters(data);
        };
        fetchData();
    }, []);

    return (
        <div className="characters">
            <h2>Campaign {id}</h2>
            {characters.map((character, index) => (
                <div key={index} className="character-container">
                    <h3>{character.basicInfo.name}</h3>
                    <p>Class: {character.basicInfo.class}</p>
                    <p>Level: {character.basicInfo.level}</p>
                    <p>Race: {character.basicInfo.race}</p>
                    <p>Alignment: {character.basicInfo.alignment}</p>
                    <div className="attributes">
                        <h4>Attributes</h4>
                        <ul>
                            {Object.keys(character.attributes).map(attr => (
                                <li key={attr}>
                                    {attr.charAt(0).toUpperCase() + attr.slice(1)}: {character.attributes[attr]}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills">
                        <h4>Skills</h4>
                        <ul>
                            {Object.keys(character.skills).map(skill => (
                                <li key={skill}>
                                    {skill.charAt(0).toUpperCase() + skill.slice(1)}: {character.skills[skill]}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="equipment">
                        <h4>Equipment</h4>
                        <ul>
                            {character.equipment.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
