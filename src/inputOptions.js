import React, {Component} from 'react';


// This moudule will generate the specified number of choices as input fields an allow the user to input their available choices.


class InputOptions extends Component {
  
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.changeView(2)
   }

   handleChange = (event) => {
      let id = this.props.options.key;
      console.log('event', event.target.key);
      let text = event.target.value;
      this.props.onType(id, text);
   }


   render(){

      
      let renderInput = (id) => <input className = 'choice' key = {id} type = 'text' value = {this.props.options.text} onChange = {this.handleChange}/>
      
      let number = this.props.numOfOptions;
      let inputs = [];

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