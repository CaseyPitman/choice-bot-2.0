import React from 'react';


// This moudule will generate the specified number of choices as input fields an allow the user to input their available choices.

let InputOptions = () => {
   return (
      <form className = 'input-options'>
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

export default InputOptions;