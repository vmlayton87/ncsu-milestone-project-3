import React from "react";
import { useNavigate } from 'react-router-dom';
import '../index.scss';

// The useHistory hook gives access to the history instance that can be used to navigate programmatically within the App, without needing to use <Link>. It also provides methods to manipulate the history stack (go back/go forward), and can pass state through Navigation, useful for transferring data between Routes. Explanation from chatGPT.

const CampaignCard = ({ campaign }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/campaigns/${campaign.id}`);
    }

    return (
        <div className="campaign-cards">
            <div className="card-container" onClick={handleClick}>
                <div className="card">
                    <div className="card-front">
                        <h3>{campaign.name}</h3>
                    </div>
                    <div className="card-back">
                        <p>{campaign.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard