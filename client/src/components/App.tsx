import React from "react";
import Canvas from "./canvas/Canvas";
import "./app.scss";
import Main from "./user-interface/main/Main";
import Others from "./user-interface/others/Others";
import Account from "./user-interface/account/Account";

const App = () => {
    return (
        <div className="app">
            <div className="interface-container">
                <div className="interface">
                    <div className="panels">
                        <div className="left-panel">
                            <Account />
                        </div>
                        <Main />
                        <div className="right-panel">
                            <Others />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
