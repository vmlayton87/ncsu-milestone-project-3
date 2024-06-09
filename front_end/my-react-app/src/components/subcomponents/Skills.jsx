import React from "react";

const Skills = ({ skills }) => {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <ul>
                {Object.keys(skills).map(skill => (
                    <li key={skill}>
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}: {skills[skill] || 0}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills

//Codeium explanation for collaborators: This is a React functional component that renders a list of skills. The skills object is passed as a prop to the component. The component maps over the keys of the skills object and creates a list item (<li>) for each skill. The skill name is capitalized and displayed along with its corresponding value from the skills object. If a skill does not have a value, it is displayed as 0. The list is wrapped in a <div> with a CSS class of "skills". The component returns the entire structure.