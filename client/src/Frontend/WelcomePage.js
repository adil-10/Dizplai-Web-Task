import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
    const navigate = useNavigate();
    const toVotingPage = () => {
        navigate('VotingPage');
    };
    return (
        <div className="welcomePageContainer">
            <header>
                <h1>Dizplai</h1>
                <h2>Choose your winner!</h2>
            </header>

            <main>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={() => toVotingPage()}>next</button>
            </main>

            <footer>
                <p>This is my footer</p>
            </footer>
        </div>
    );
};

export default WelcomePage;