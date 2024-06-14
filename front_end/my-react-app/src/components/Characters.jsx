import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../index.scss';

const Characters = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate fetching data
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/characters/');
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`)
                }
                const result = await response.json();
                setCharacters(result);    
            } catch (error) {
                setError(error.message);
            }

            const data = response;
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
