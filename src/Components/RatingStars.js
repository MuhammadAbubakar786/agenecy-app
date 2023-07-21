import React, { useEffect, useState } from "react";
import { FaStar as Star } from "react-icons/fa";

const colors = {
  pink: "#FF59E9",
  grey: "#F2F4F7",
};

const RatingStars = ({ rating }) => {
  const [currentValue, setCurrentValue] = useState(rating);
  const stars = Array(5).fill(0);
  useEffect(() => {
    setCurrentValue(rating);
  }, [rating]);
  return (
    <div className="flex">
      {stars.map((e, index) => {
        return (
          <Star
          className="h-[20px] w-[20px]"
            key={index}
            size={18}
            color={currentValue > index ? colors.pink : colors.grey}
            style={{ 
              marginRight: 6,
              cursor: "pointer",
            }}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
