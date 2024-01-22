import { useNavigate } from 'react-router-dom';
import "../FrontendDesign/WelcomePage.css"

const WelcomePage = () => {
    const navigate = useNavigate();
    const toVotingPage = () => {
        navigate('VotingPage');
    };

    return (
        <div className="welcomePageContainer">
            <header>
                <h1 className="title">Dizplai</h1>
                <img className="image" src="football.jpeg" alt="football" />
                <h2 className="subHeader">Who will win the ballon d'or 2024!</h2>
            </header>

            <main className="homePageMainContainer">
                <div className="boxedContainer">
                    <p>
                        Welcome to Dizplai, your platform for an interactive and engaging voting experiences.
                        Join us on this journey let your voice be heard. Together,
                        we make decisions, celebrate victories, and create a community of passionate individuals. <br /> Now click "Next" to start and caste your winner!
                        I hope you enjoy.
                    </p>

                </div>
                <button className="goToNextPage" onClick={() => toVotingPage()}>Next</button>
            </main>

            <footer className="footerContainer">
                <p>Created by Adil Badat</p>
            </footer>
        </div >
    );
};

export default WelcomePage;