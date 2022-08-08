import React from "react";
import Card1 from "./utils/Card1";

//* Importing Icons

import interactiveIcon from "../Assets/icons/website-svgrepo-com.svg";
import preLoadCourse from "../Assets/icons/24-hours-svgrepo-com.svg";
import banking from "../Assets/icons/online-banking-svgrepo-com.svg";
import teamwork from "../Assets/icons/teamwork-svgrepo-com.svg";

import { v4 as uuidv4 } from "uuid";

const FacilitiesCard = () => {
    return (
        <div className="shadow-md rounded-xl md p-5 w-72 h-full">
            {/* All Cards */}
            {cardsData.map((card) => {
                return (
                    <Card1
                        key={uuidv4()}
                        icon={card.icon}
                        title={card.title}
                        desc={card.desc}
                        titleFont='large'
                        descFont='medium'
                        titleColor = 'dark'
                        descColor='blue'
                        iconSize='mediumIcon'
                    />
                );
            })}
        </div>
    );
};

const cardsData = [
    {
        id: uuidv4(),
        icon: interactiveIcon,
        title: "Interactive Live courses",
        desc: "1000s of courses from experts in every field",
    },
    {
        id: uuidv4(),
        icon: preLoadCourse,
        title: "Pre-uploaded courses",
        desc: "1000s of courses from experts in every field",
    },
    {
        id: uuidv4(),
        icon: banking,
        title: "Easy to use dashboard",
        desc: "1000s of courses from experts in every field",
    },
    {
        id: uuidv4(),
        icon: teamwork,
        title: "Easy to use dashboard",
        desc: "1000s of courses from experts in every field",
    },
];

export default FacilitiesCard;
