import React from "react";

const BasicInfo = ({ info }) => {
    return (
        <div className="basic-info">
            <h2>{info.name || 'Unknown Name'}</h2>
            <p>{info.class || 'Unknown Class'}</p>
            <p>{info.level || 'Unknown Level'}</p>
            <p>{info.race || 'Unknown Race'}</p>
            <p>{info.alignment || 'Unknown Alignment'}</p>
        </div>
    )
}

export default BasicInfo

// Codeium explanation for collaborators: This code snippet defines a functional component called BasicInfo in JavaScript using React. It takes an object called info as a prop. Inside the component, it renders a div element with a class of "basic-info". Inside the div, it renders several h2 and p elements. The content of these elements is determined by the values of the info object. If a value is undefined or null, it will display a default message like "Unknown Name", "Unknown Class", etc. The component is exported as the default export.