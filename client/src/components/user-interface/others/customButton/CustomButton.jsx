import React from "react";
import "./customButton.scss";

const CustomButton = ({ icon, title }) => {
    const Icon = icon;

    return (
        <div className="button-wrapper">
            <div className="button-item">
                <div>
                    <Icon className="button-item--icon" />
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomButton;
