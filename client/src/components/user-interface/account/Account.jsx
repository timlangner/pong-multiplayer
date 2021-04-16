import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import "./account.scss";

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        window.open(
            "https://discord.com/api/oauth2/authorize?client_id=832621678562770964&redirect_uri=https%3A%2F%2Fpong.ly%2Fauth%2Fdiscord&response_type=code&scope=email",
            "targetWindow",
            "width=500,height=800,location=no,top=20"
        );
    };
    return (
        <div className="account-container">
            <div className="login-wrapper">
                <button className="login-button" onClick={() => handleLogin()}>
                    <FontAwesomeIcon icon={faDiscord} /> Login with Discord
                </button>
                <p>
                    Login to save your in-game process, level up and get
                    exclusive rewards!
                </p>
            </div>
        </div>
    );
};

export default Account;
