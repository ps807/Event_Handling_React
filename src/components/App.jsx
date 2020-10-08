import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleOnMouseOver() {
    setButtonBackgroundColor("black");
  }

  function handleOnMouseOut() {
    setButtonBackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        style={{ backgroundColor: buttonBackgroundColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
