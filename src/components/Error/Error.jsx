import React, { useState, useEffect } from 'react';
import "./Error.scss"

const RandomNumberComponent = ({ number }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [randomizing, setRandomizing] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (randomizing) {
      const timer = setInterval(() => {
        setCurrentNumber(Math.floor(Math.random() * 10));
        setCount(prevCount => prevCount + 1);
      }, 10);

      if (count === 100) {
        clearInterval(timer);
        setCurrentNumber(number);
        setRandomizing(false);
        setCount(0);
      }

      return () => clearInterval(timer);
    }
  }, [randomizing, count, number]);

  return (
    <span className="randomize">
      {currentNumber}
    </span>
  );
};

const Error = () => {
  const numbers = [4, 0, 4];

  return (
    <div className="error">
      {numbers.map((num, index) => (
        <RandomNumberComponent key={index} number={num} />
      ))}
    </div>
  );
};

export default Error;