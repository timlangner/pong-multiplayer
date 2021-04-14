import React from "react";
import Canvas from "./canvas/Canvas";
import "./app.scss";
import Main from "./user-interface/main/Main";

const App = () => {
    return (
        <div className="app">
            <div className="interface-container">
                <div className="interface">
                    <div className="panels">
                        <Main />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
