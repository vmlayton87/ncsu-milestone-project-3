import React from "react";

const Attributes = ({ attributes }) => {
    return (
        <div className="attributes">
            <h3>Attributes</h3>
            <ul>
                {Object.keys(attributes).map(attr => (
                    <li key={attr}>
                        {attr.charAt(0).toUpperCase() + attr.slice(1)}: {attributes[attr]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Attributes

//Codeium explanation for collaborators: This code defines a functional component in JavaScript called Attributes. It takes an object attributes as a parameter. The component renders a <div> element with a class name of "attributes", which contains an <h3> element with the text "Attributes" and a <ul> element. The <ul> element is populated with <li> elements, one for each key in the attributes object. Each <li> element displays the capitalized first letter of the key, followed by the rest of the key, and the corresponding value from the attributes object. The key prop is set to the key of the current attribute to help React efficiently update and reorder the list.