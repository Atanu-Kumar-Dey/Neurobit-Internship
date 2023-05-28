import React, { useState, useEffect } from "react";

const CounterAnimation = ({ limit }) => {
  const [number, setNumber] = useState(0);
  const duration = 1500; // Duration in milliseconds

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const increment = Math.ceil((limit / duration) * 10); // Adjust the increment based on the duration

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (currentTime >= endTime) {
        clearInterval(interval); // Stop the animation when the duration is reached
        setNumber(limit);
      } else {
        setNumber((prevNumber) => {
          const nextNumber = prevNumber + increment;
          return nextNumber > limit ? limit : nextNumber; // Ensure the next number does not exceed the limit
        });
      }
    }, 10); // Interval set to 10 milliseconds for smoother animation

    return () => {
      clearInterval(interval);
    };
  }, [limit, duration]);

  return <div id="nbr">{number}</div>;
};

export default CounterAnimation;
