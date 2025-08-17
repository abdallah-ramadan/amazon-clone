import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const StarRate = ({ currentRate }) => {
    return (
        <>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    size={{fontSize: "15px"}}
                    style={{ stroke: "#FF9900", strokeWidth: 12}}
                    color={starValue <= currentRate ? "#FFCC00" : "#FFFF"}
                />
                );
            })}
        </>
    );
};
