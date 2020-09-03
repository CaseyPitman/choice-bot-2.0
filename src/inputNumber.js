import React, {Component} from 'react';





class InputNumber extends Component {
   constructor(props){
      super(props)
   }

   //click handler onSubmit calls submitNumber function

   render(){
      return (
         <form className = 'input-num-options'>
            <h3 className = 'question'>How many options do you have?</h3>
            <input className = 'num-of-options' type = 'number'/>
            <br/>
            <button className = 'submit-num-input' type = 'submit'>Submit Options</button>
         </form>
      )
   }
}

export default InputNumber;