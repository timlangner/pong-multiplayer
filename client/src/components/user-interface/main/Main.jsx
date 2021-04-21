import React, { useState } from "react";
import { CogIcon } from "@heroicons/react/solid";
import Settings from "../modals/settings/Settings";
import "./main.scss";

const Main = () => {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <>
            {showSettings ? (
                <Settings show={true} onHide={() => setShowSettings(false)} />
            ) : null}

            <div className="main-container">
                <h4 className="headline">Pong Multiplayer</h4>
                <div className="duo-buttons">
                    <button className="create-button">CREATE</button>
                    <button className="join-button" onClick={console.log}>
                        JOIN
                    </button>
                </div>
                <div className="settings-button--wrapper">
                    <button
                        className="settings-button"
                        onClick={() => setShowSettings(true)}
                    >
                        <CogIcon className="cog-icon" />
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
