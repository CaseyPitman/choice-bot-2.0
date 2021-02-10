import React from "react";

// This module returns the header

const Header = () => {
  return (
    <header className='header'>
      <div className='headlines'>
        <h1 className='main-headline'>Choice Bot </h1>
        <h2 className='version-text'>v.2.0</h2>
        <h2 className='sub-headline'>
          Put your fate in my robotic hands puny human.{" "}
        </h2>
      </div>
      <img
        className='robot-image'
        src={require("./choice-bot.jpg")}
        alt='The Choicebot'
      />
    </header>
  );
};

export default Header;
