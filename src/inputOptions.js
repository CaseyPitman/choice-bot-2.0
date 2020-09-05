import React, {Component} from 'react';


// This moudule will generate the specified number of choices as input fields an allow the user to input their available choices.


class InputOptions extends Component {
  
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.changeView(2)
   }
   
   render(){

      let className = 'input-options';
      if (this.props.currentView === 1){
         className += ' show';
      } else {
         className += ' hide'
      }

      return (
         <form className = {className} onSubmit = {this.handleSubmit}>
            <h3 className= 'question'> Enter your options.</h3>
            <div className = 'choices'>
               <input className = 'choice1' type = 'text'/>
               <br/>
               <input className = 'choice1' type = 'text'/>
               <br/>
               <input className = 'choice1' type = 'text'/>
            </div>
            <button className = 'submit-options' type = 'submit'>Make a decision.</button>
         </form>
      )
   }
}

export default InputOptions;