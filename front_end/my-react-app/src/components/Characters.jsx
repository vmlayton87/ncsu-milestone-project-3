import React from "react";
import { useParams } from "react-router-dom";
import '../index.scss';

const Characters = () => {
    const { id } = useParams();

    const characterSheet = {
        name: 'Tav',
        class: 'Bard',
        level: 5,
        stats: {
            strength: 8,
            dexterity: 14,
            constitution: 12,
            intelligence: 10,
            wisdom: 10,
            charisma: 16
        }
    };

    const notes = [
        'Note 1: Do NOT trust the innkeeper.',
        'Note 2: The bed was lumpy, -1 to saving throws.',
        'Note 3: Small hands, good for thieving.'
    ];

    return (
        <div className="characters">
            <h2>Campaign {id}</h2>
            <div className="character-sheet">
                <h3>Character Sheet</h3>
                <p>Name: {characterSheet.name}</p>
                <p>Class: {characterSheet.class}</p>
                <p>Level: {characterSheet.level}</p>
                <div className="stats">
                    <p>Strength: {characterSheet.stats.strength}</p>
                    <p>Dexterity: {characterSheet.stats.dexterity}</p>
                    <p>Constitution: {characterSheet.stats.constitution}</p>
                    <p>Intelligence: {characterSheet.stats.intelligence}</p>
                    <p>Wisdom: {characterSheet.stats.wisdom}</p>
                    <p>Charisma: {characterSheet.stats.charisma}</p>
                </div>
            </div>
            <div className="notes">
                <h3>Notes</h3>
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Characters;
