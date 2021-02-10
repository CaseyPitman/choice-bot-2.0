import React, { Component } from "react";

class Decision extends Component {
  // This module renders the decision made by Choice Bot v.2.0

  //Reset to initial view and state
  handleClick = () => {
    this.props.reset();
  };

  render() {
    //Shows/Hides depending on state.currentView
    let className = "decision";
    if (this.props.currentView === 2) {
      className += " show";
    } else {
      className += " hide";
    }

    return (
      <div className={className}>
        <h3 className='result-text'>You should choose</h3>
        <h3 className='result'>{this.props.choice}</h3>
        <button className='reset' onClick={this.handleClick}>
          Make another choice.
        </button>
      </div>
    );
  }
}

export default Decision;
