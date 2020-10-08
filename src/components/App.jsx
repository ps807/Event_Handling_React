import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setButtonBackgroundColor("black");
  }

  function handleMouseOut() {
    setButtonBackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: buttonBackgroundColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
