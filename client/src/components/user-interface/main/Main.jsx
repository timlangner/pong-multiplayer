import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./main.scss";

const Main = () => {
    return (
        <>
            <div className="main-container">
                <h2 className="headline">Pong Multiplayer</h2>
                <div className="duo-buttons">
                    <button className="create-button">
                        <p>CREATE</p>
                    </button>
                    <button className="join-button" onClick={console.log}>
                        <p>JOIN</p>
                    </button>
                </div>
                <div className="settings-button--wrapper">
                    <button className="settings-button" onClick={console.log}>
                        <FontAwesomeIcon icon={faCog} />
                    </button>
                </div>
                <div className="ad-wrapper">
                    <div className="center">
                        <p>ADVERTISEMENT</p>
                    </div>
                    <div className="ad-container" />
                </div>
            </div>
        </>
    );
};

export default Main;
