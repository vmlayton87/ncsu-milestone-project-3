import React from "react";
import { useState } from "react";
import { Card } from 'react-bootstrap';
import '../index.scss';

function DmCard() {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src="../assets/Campfire2D.gif" alt="image test" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
}

export default DmCard;