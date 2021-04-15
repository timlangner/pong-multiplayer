import React from "react";
import {
    faUserFriends,
    faTrophy,
    faChartBar,
    faShoppingBag,
} from "@fortawesome/pro-regular-svg-icons";
import CustomButton from "./customButton/CustomButton";
import "./others.scss";

const Others = () => {
    return (
        <div className="others-container">
            <CustomButton icon={faUserFriends} title="Friends" />
            <CustomButton icon={faTrophy} title="Top 100" />
            <CustomButton icon={faChartBar} title="Stats" />
            <CustomButton icon={faShoppingBag} title="Shop" />
        </div>
    );
};

export default Others;
