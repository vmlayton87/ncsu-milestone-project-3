import React from "react";
import { useNavigate } from 'react-router-dom';
import '../index.scss';


const CampaignCard = ({ campaign }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/campaigns/${campaign.id}`);
    }

    return (
        <div className="card-container" onClick={handleClick}>
            <div className="card">
                <div className="card-front" style={{ backgroundImage: `url(${campaign.image_url})`}}>
                    <h3>{campaign.name}</h3>
                </div>
                <div className="card-back">
                    <p>{campaign.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard