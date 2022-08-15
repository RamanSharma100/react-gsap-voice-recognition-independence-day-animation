import React from "react";

import "../styles/StartScreen.css";

const StartScreen = ({ setVandeMatram, recognition }) => {
  return (
    <div className="start-screen">
      <h1>
        Say or Click
        <br />"<span onClick={() => setVandeMatram(true)}>VANDE MATARAM</span>"
      </h1>
      <button
        style={{
          zIndex: 9999,
          padding: "10px 35px",
          marginTop: "85px",
          cursor: "pointer",
          color: "#000",
          background: "transparent",
          border: "2px solid #000",
        }}
        onClick={() => recognition.start()}
      >
        Say
      </button>
    </div>
  );
};

export default StartScreen;
