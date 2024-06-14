import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.scss';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch character sheets for the logged-in user
    const fetchCharacters = async () => {
      const response = await fetchUserCharacters(); // Replace with API call
      setCharacters(response);
    };

    fetchCharacters();
  }, []);

  const fetchUserCharacters = async () => {
    // Replace this mock data with the API call to fetch character sheets for the user. This is showing a snapshot of the character and will shot the full character sheet when clicked.
    return [
      {
        id: 1,
        name: 'Character 1',
        class: 'Wizard',
        level: 5,
        image: 'path/to/image1.jpg'
      },
      {
        id: 2,
        name: 'Character 2',
        class: 'Rogue',
        level: 3,
        image: 'path/to/image2.jpg'
      }
    ];
  };

  const handleCharacterClick = (characterId) => {
    navigate(`/character/${characterId}`); // Navigate to the character sheet view
  };

  return (
    <div className="characters-page">
      <h2>Your Characters</h2>
      <div className="character-list">
        {characters.map((character) => (
          <div
            key={character.id}
            className="character-card"
            onClick={() => handleCharacterClick(character.id)}
            style={{ backgroundImage: character.image ? `url(${character.image})` : 'none' }}
          >
            {!character.image && (
              <div className="placeholder">
                <h4>{character.name}</h4>
                <p>{character.class} - Level {character.level}</p>
              </div>
            )}
            {character.image && (
              <div className="card-body">
                <h4>{character.name}</h4>
                <p>{character.class} - Level {character.level}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
