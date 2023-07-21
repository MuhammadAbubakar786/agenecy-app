import React, { useEffect, useState } from "react";
import { FaStar as Star } from "react-icons/fa";

const colors = {
  orange: "#EBBC00",
  grey: "#C9C9C9",
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
          className="h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] md:h-[16px] md:w-[16px] xmd:h-[13px] xmd:w-[13px]"
            key={index}
            size={18}
            color={currentValue > index ? colors.orange : colors.grey}
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
