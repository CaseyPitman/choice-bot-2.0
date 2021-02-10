import React, { Component } from "react";

//This module allows the user to input the number of options they have
//when making their choice.

class InputNumber extends Component {
  //Saves input number in state
  handleChange = event => {
    let number = event.target.value;
    this.props.updateNumber(number);
  };

  // Saves the choices and new view in state.
  handleSubmit = event => {
    event.preventDefault();
    this.props.createChoices();
    this.props.changeView(1);
  };

  render() {
    //Hide or show based on state.currentView
    let className = "input-num-options";
    if (this.props.currentView === 0) {
      className += " show";
    } else {
      className += " hide";
    }

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <h3 className='question'>How many options do you have?</h3>
        <input
          className='num-of-options'
          placeholder='Enter a number'
          type='number'
          value={this.props.num}
          onChange={this.handleChange}
        />
        <br />
        <button className='submit-num-input' type='submit'>
          Submit Options
        </button>
      </form>
    );
  }
}

export default InputNumber;
