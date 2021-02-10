import React, { Component } from "react";

// This module renders a choice input field.

class Choice extends Component {
  //Updates choice text in state when typing
  handleChange = event => {
    let id = this.props.input.key;
    let text = event.target.value;
    this.props.onType(id, text);
  };

  render() {
    return (
      <input
        className='choice'
        type='text'
        value={this.props.text}
        onChange={this.handleChange}
      />
    );
  }
}

export default Choice;
