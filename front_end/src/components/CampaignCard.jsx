import React from "react";
import { useNavigate } from 'react-router-dom';
import '../index.scss';
import { getToken } from "../utils/auth";


const CampaignCard = ({ campaign }) => {

    const token = getToken();

    const navigate = useNavigate();
    const handleClick = () => {
        try {
            navigate(`/campaigns/${campaign.id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="card-container" onClick={handleClick}>
            <div className="card">
                <div className="card-front" style={{ backgroundImage: campaign.image_url? `url(${campaign.image_url})`:`url(https://images.pexels.com/photos/6489543/pexels-photo-6489543.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
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