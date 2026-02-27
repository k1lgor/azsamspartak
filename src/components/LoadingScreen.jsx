import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1000),
      setTimeout(() => setStage(3), 1500),
      setTimeout(() => onComplete && onComplete(), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="loading-container variant-B">
      <div className="loading-content">
        <div className="loading-text pulse-text">
          <span className={stage >= 1 ? "visible" : ""}>Аз... </span>
          <span className={stage >= 2 ? "visible" : ""}>Съм... </span>
          <span className={stage >= 3 ? "visible" : ""}>СПАРТАК!</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
