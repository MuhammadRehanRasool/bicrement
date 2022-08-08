import React from "react";

const styles = {
    large:'text-md',
    medium: "text-sm",
    small: "text-xs",
    blue: "text-blues-light",
    dark: "text-content",
    mediumIcon: "w-16",
    smallIcon: "w-12",
};

const Card1 = ({
    icon,
    title,
    desc,
    titleFont,
    descFont,
    titleColor,
    descColor,
    iconSize,
}) => {
    return (
        <div className="py-1">
            <div className="flex items-center space-x-3 ">
                <div className="img">
                    <img src={icon} className={`${styles[iconSize]}`} alt="" />
                  
                </div>

                <div className="space-y-1 text-center">
                    {title && (
                        <h1
                            className={`${styles[titleFont]} ${styles[titleColor]}  `}
                        >
                            {title}
                        </h1>
                    )}
                    {desc && (
                        <h1
                            className={`${styles[descFont]} ${styles[descColor]} `}
                        >
                            {desc}
                        </h1>
                    )}
                </div>
            </div>
            <div className="w-8/12 h-[0.8px] rounded-xl mx-auto mt-4  bg-gray-300 "></div>
        </div>
    );
};

export default Card1;
