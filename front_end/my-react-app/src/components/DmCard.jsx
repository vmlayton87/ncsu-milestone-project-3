import React from "react";
import { useNavigate } from 'react-router-dom';
import '../index.scss';

const DmCard = ({ character }) => {
        const navigate = useNavigate();
        const handleClick = () => {
            navigate(`/character/${character.id}`);
        }

    return (
        <div className ="card" style = {{ width: '20rem', height: '18rem'}} onClick={handleClick}>
            <img className ="card-img-top" src="..." alt="Card image cap" />
            <div className ="card-body">
                <h5 className ="card-title">{character.name}</h5>
            </div>
            <ul className ="list-group list-group-flush">
                <li className ="list-group-item">Health: {character.currentHP}/{character.maxHP}</li>
                <li className ="list-group-item">Armor Class: {character.ac}</li>
                <li className ="list-group-item">Speed: {character.speed}</li>
                <li className ="list-group-item">Passive Perception: {character.passivePerception}</li>
            </ul>
        </div>
    );
}

export default DmCard;