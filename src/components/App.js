import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const input = Math.floor(parseFloat(event.target.value));

      if (isNaN(input) || input < 0) {
        setCount(0);
      } else {
        setCount(input);
      }
    }
  };

  useEffect(() => {
    let timer;

    if (count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <input id="timeCount" type="number" onKeyDown={handleKeyDown} />
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
