import React, { useState } from "react";
import "./navbar.scss";

const Navbar = ({ selectedPage, setSelectedPage }) => {
    return (
        <nav>
            <div>
                <button
                    style={
                        selectedPage === 0
                            ? {
                                  backgroundColor: "#E5E7EB",
                                  borderLeft: "3px solid #F43F5E",
                              }
                            : null
                    }
                    onClick={() => setSelectedPage(0)}
                >
                    General
                </button>
                <button
                    style={
                        selectedPage === 1
                            ? {
                                  backgroundColor: "#E5E7EB",
                                  borderLeft: "3px solid #F43F5E",
                              }
                            : null
                    }
                    onClick={() => setSelectedPage(1)}
                >
                    Appearance
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
