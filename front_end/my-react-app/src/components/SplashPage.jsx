import React from "react";

const SplashPage = () => {
    return (
        <div className="splash-page">
            <h1>Greetings, Traveler</h1>
            <div className="buttons">
                <button onClick={() => alert('Log In Clicked')}>Log In</button>
                <button onClick={() => alert('Sign Up Clicked')}>Sign Up</button>
            </div>
        </div>
    )
}

export default SplashPage