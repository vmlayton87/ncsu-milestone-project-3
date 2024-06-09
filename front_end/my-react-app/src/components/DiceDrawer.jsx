import React, { useState } from "react";
import DiceRoller from "./DiceRoller";
import '../index.scss';

const DiceDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className={`dice-drawer ${isOpen ? 'open' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="drawer-content">
                <DiceRoller />
            </div>
        </div>
    );
};

export default DiceDrawer;
