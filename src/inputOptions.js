import React, {Component} from 'react';


// This moudule will generate the specified number of choices as input fields an allow the user to input their available choices.


class InputOptions extends Component {
  

   


   render(){

      let className = 'input-options';
      console.log(this.props.visibility)
      if (this.props.currentView === 1){
         className += ' show';
      } else {
         className += ' hide'
      }


      return (
         <form className = {className}>
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