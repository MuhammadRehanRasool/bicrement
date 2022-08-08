import React from "react";

import { v4 as uuidv4 } from "uuid";
import testTube from "../Assets/icons/test-tube.png";
import Card1 from "./utils/Card1";

const ExploreSearch = () => {
    return (
        <div className="shadow-md rounded-xl flex flex-col items-center justify-start p-5 w-64 space-y-5 h-full">
            <div className="border border-grays-light rounded-full shadow bg-transparent text-xs px-3 py-2 flex items-center space-x-2 w-full">
                <input
                    type="text"
                    name=""
                    id=""
                    className="outline-none"
                    placeholder="Starts Typing"
                />
            </div>

            {/* Searches Cards */}

            {/* All Cards */}
            {cardsData.map((card) => {
                return (
                    <Card1
                        key={uuidv4()}
                        icon={card.icon}
                        title={card.title}
                        desc={card.desc}
                        descFont="small"
                        descColor="dark"
                        iconSize='smallIcon'
                    />
                );
            })}
        </div>
    );
};

const cardsData = [
    {
        id: uuidv4(),
        icon: testTube,
        desc: "Training the Schrodinger's cat to stay alive.",
    },
    {
        id: uuidv4(),
        icon: testTube,
        desc: "Training the Schrodinger's cat to stay alive.",
    },
    {
        id: uuidv4(),
        icon: testTube,
        desc: "Training the Schrodinger's cat to stay alive.",
    },
    {
        id: uuidv4(),
        icon: testTube,
        desc: "Training the Schrodinger's cat to stay alive.",
    },
    {
        id: uuidv4(),
        icon: testTube,
        desc: "Training the Schrodinger's cat to stay alive.",
    },
];

export default ExploreSearch;
