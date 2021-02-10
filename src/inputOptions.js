import React from "react";
import Choice from "./choices";

// This moudule will generate the specified number of choices as input
//fields an allow the user to input their available choices.

let InputOptions = props => {
  //Changes view after submission
  let handleSubmit = event => {
    event.preventDefault();
    props.changeView(2);
  };

  //Renders the stipulated number of input fields
  let renderInput = input => (
    <Choice
      key={input.key}
      text={input.text}
      input={input}
      onType={props.onType}
    />
  );

  let inputs = props.options.map(renderInput);

  // Transition to next view
  let className = "input-options";
  if (props.currentView === 1) {
    className += " show";
  } else {
    className += " hide";
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h3 className='question'> Enter your options.</h3>
      <div className='choices'>{inputs}</div>
      <button className='submit-options' type='submit'>
        Make a decision.
      </button>
    </form>
  );
};

export default InputOptions;
