import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
