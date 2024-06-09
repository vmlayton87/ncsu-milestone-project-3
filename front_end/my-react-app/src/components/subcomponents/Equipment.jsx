import React from "react";

const Equipment = ({ equipment }) => {
    return (
        <div className="equipment">
            <h3>Equipment</h3>
            <ul>
                {equipment.length > 0 ? (
                    equipment.map(item => <li key={item}>{item}</li>)
                ) : (
                    <li>No equipment listed</li>
                )}
            </ul>
        </div>
    )
}

export default Equipment

//Codeium explanation for collaborators: This code snippet defines a React functional component called Equipment. It takes an object equipment as a prop. The component renders a <div> with a class name of "equipment". Inside the <div>, it renders an <h3> element with the text "Equipment". It also renders an <ul> (unordered list) element.

// If the equipment array has a length greater than 0, it maps over the equipment array and renders a <li> (list item) element for each item in the array. The key prop is set to the current item to help React efficiently update and reorder the list.

// If the equipment array is empty, it renders a single <li> element with the text "No equipment listed".

// In summary, this code snippet is a React component that displays a list of equipment, or a message indicating that no equipment is listed.