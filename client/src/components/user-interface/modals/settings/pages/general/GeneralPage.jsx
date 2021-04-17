import React, { useState } from "react";
import "./generalPage.scss";

const GeneralPage = () => {
    const [hideChat, setHideChat] = useState(false);
    const [showRanks, setShowRanks] = useState(true);
    const [hideNames, setHideNames] = useState(false);
    const [showSkins, setShowSkins] = useState(true);

    return (
        <>
            <div className="checkbox-double">
                <div
                    className="label-group"
                    onClick={() => setHideChat(!hideChat)}
                >
                    <input type="checkbox" checked={hideChat} />
                    <label
                        style={
                            !hideChat
                                ? {
                                      color: "rgba(71, 85, 105 , 0.5)",
                                      fontWeight: "600",
                                  }
                                : { color: "#4B5563", fontWeight: "600" }
                        }
                    >
                        Hide Chat
                    </label>
                </div>
                <div
                    className="label-group"
                    onClick={() => setShowRanks(!showRanks)}
                >
                    <input type="checkbox" checked={showRanks} />
                    <label
                        style={
                            !showRanks
                                ? {
                                      color: "rgba(71, 85, 105 , 0.5)",
                                      fontWeight: "600",
                                  }
                                : { color: "#4B5563", fontWeight: "600" }
                        }
                    >
                        Show Ranks
                    </label>
                </div>
                <div
                    className="label-group"
                    onClick={() => setHideNames(!hideNames)}
                >
                    <input type="checkbox" checked={hideNames} />
                    <label
                        style={
                            !hideNames
                                ? {
                                      color: "rgba(71, 85, 105 , 0.5)",
                                      fontWeight: "600",
                                  }
                                : { color: "#4B5563", fontWeight: "600" }
                        }
                    >
                        Hide Names
                    </label>
                </div>
                <div
                    className="label-group"
                    onClick={() => setShowSkins(!showSkins)}
                >
                    <input type="checkbox" checked={showSkins} />
                    <label
                        style={
                            !showSkins
                                ? {
                                      color: "rgba(71, 85, 105 , 0.5)",
                                      fontWeight: "600",
                                  }
                                : { color: "#4B5563", fontWeight: "600" }
                        }
                    >
                        Show Skins
                    </label>
                </div>
            </div>
        </>
    );
};

export default GeneralPage;
