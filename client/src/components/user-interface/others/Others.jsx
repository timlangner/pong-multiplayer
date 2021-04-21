import React from "react";
import {
    ShoppingBagIcon,
    ChartSquareBarIcon,
    GlobeIcon,
    UsersIcon,
} from "@heroicons/react/outline";
import CustomButton from "./customButton/CustomButton";
import "./others.scss";

const Others = () => {
    return (
        <div className="others-container">
            <CustomButton icon={UsersIcon} title="Friends" />
            <CustomButton icon={GlobeIcon} title="Top 100" />
            <CustomButton icon={ChartSquareBarIcon} title="Stats" />
            <CustomButton icon={ShoppingBagIcon} title="Shop" />
        </div>
    );
};

export default Others;
