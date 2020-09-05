import React, {Component} from 'react';


// This moudule will generate the specified number of choices as input fields an allow the user to input their available choices.


class InputOptions extends Component {
  
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.changeView(2)
   }

   render(){

      let number = this.props.numOfOptions;
      let inputs = [];

      let renderInput = (id) => <input className = 'choice' key = {id} type = 'text'/>;  //add to state

      //we should end up with a bunch of empty inputs in state. write and addInput function in app.js and add to state there, (store key! use object?) input: {key:blah, text''}
      //call it in the loop below as it builds. 
      //after that, you need to make sure each one has a onChange in the render above and update to state ,you'll need to pass id. 
      //you can do this. 

      for (let i = 0; i < number; i++){
         let input = renderInput(i);
         inputs.push(input);
      }

      // Transition to next view
      let className = 'input-options';
      if (this.props.currentView === 1){
         className += ' show';
      } else {
         className += ' hide';
      }

      return (
         <form className = {className} onSubmit = {this.handleSubmit}>
            <h3 className= 'question'> Enter your options.</h3>
            <div className = 'choices'>
               {inputs}
            </div>
            <button className = 'submit-options' type = 'submit'>Make a decision.</button>
         </form>
      )
   }
}

export default InputOptions;