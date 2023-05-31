import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [inputTime, setInputTime] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  let timer = null;

  const startTimer = () => {
    if (timer !== null) {
      clearInterval(timer); // Terminate the previous timer if it exists
    }

    const time = Math.floor(parseFloat(inputTime)); // Take floor of floating input
    const countdown = time > 0 ? time : 0; // Set initial countdown value
    setCurrentTime(countdown); // Update initial value

    timer = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1; // Decrement countdown value
        } else {
          clearInterval(timer); // Stop the timer when countdown reaches 0
          timer = null;
          return 0;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearInterval(timer); // Cleanup the timer when component unmounts
      }
    };
  }, []);

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter time"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              startTimer();
            }
          }}
        />
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  );
}

export default CountdownTimer;
