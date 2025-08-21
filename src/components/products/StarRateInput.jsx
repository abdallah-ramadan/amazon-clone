import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const StarRateInput = ({ onChange }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="star-rate">
        {[...Array(5)].map((_, index) => {
            const currentRate = index + 1;
            return (
            <label key={currentRate}>
                <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => {
                    setRating(currentRate);
                    onChange?.(currentRate);
                }}
                style={{ display: "none" }}
                />
                <FontAwesomeIcon
                icon={faStar}
                size="lg"
                style={{ cursor: "pointer", stroke: "#FF9900", strokeWidth: 12 }}
                color={currentRate <= (hover || rating) ? "#FFCC00" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRate)}
                onMouseLeave={() => setHover(null)}
                />
            </label>
            );
        })}
        <span> &UP</span>
        </div>
    );
};
