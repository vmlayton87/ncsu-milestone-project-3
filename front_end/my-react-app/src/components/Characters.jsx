import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../index.scss';
import { getToken } from "../utils/auth";
import { Button, Container, Row, Col } from 'react-bootstrap';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await fetch(`${serverUrl}/characters/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`)
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
    navigate(`/character/${characterId}`);
  };

  return (
    <Container className="characters-page">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Your Characters</h2>
          <Button variant="primary" onClick={() => navigate('/create-character')} className="mb-3">
            Create New Character
          </Button>
          <div className="character-list">
            {characters.map((character) => (
              <div
                key={character.id}
                className="character-card"
                onClick={() => handleCharacterClick(character.id)}
                style={{ backgroundImage: character.image ? `url(${character.image})` : 'none' }}
              >
                <div className="card-body">
                  <h4>{character.name}</h4>
                  <p>{character.race} - {character.classLevel}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Characters;
