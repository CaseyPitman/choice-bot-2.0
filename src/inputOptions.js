import React from 'react';
import Choice from './choices'

// This moudule will generate the specified number of choices as input fields an allow the user to input their available choices.


let InputOptions = (props) => {
  
   let handleSubmit = (event) => {
      event.preventDefault();
      props.changeView(2)
   }

   // handleChange = (event) => {
   //    let id = this.props.options.key;
   //    console.log('event', event.target.key);
   //    let text = event.target.value;
   //    this.props.onType(id, text);
   // }

   let renderInput = (input) => <Choice key = {input.key} text = {input.text} input = {input} onType = {props.onType}/>

   let inputs = props.options.map(renderInput);
      
      // let renderInput = (id) => <input className = 'choice' key = {id} type = 'text' value = {this.props.options.text} onChange = {this.handleChange}/>
      
      // let number = this.props.numOfOptions;
      // let inputs = [];

      //    for (let i = 0; i < number; i++){
      //       let input = renderInput(i);
      //       inputs.push(input);
      //    }

      // Transition to next view
      let className = 'input-options';
      if (props.currentView === 1){
         className += ' show';
      } else {
         className += ' hide';
      }

      return (
         <form className = {className} onSubmit = {handleSubmit}>
            <h3 className= 'question'> Enter your options.</h3>
            <div className = 'choices'>
              {inputs}
            </div>
            <button className = 'submit-options' type = 'submit'>Make a decision.</button>
         </form>
      )
   
}

export default InputOptions;