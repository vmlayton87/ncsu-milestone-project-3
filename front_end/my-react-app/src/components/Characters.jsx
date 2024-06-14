import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../index.scss';
import { getToken } from "../utils/auth";
import { Button } from 'react-bootstrap';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);
  const token = getToken();

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await fetch('http://127.0.0.1:5000/characters/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const result = await response.json();
        setCharacters(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleCharacterClick = (characterId) => {
    navigate(`/character/${characterId}`); // Navigate to the character sheet view
  };

  return (
    <div className="characters-page">
      <h2>Your Characters</h2>
      <div className="button-container">
      <Button variant="primary" onClick={() => navigate('/create-character')}>
        Create New Character
      </Button>
      </div>
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
