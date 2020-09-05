import React, {Component} from 'react';


class InputNumber extends Component {



   handleChange = (event) =>{
      let number = event.target.value;
      this.props.updateNumber(number)
   }


   //click handler onSubmit calls submitNumber function
   handleSubmit = (event) => {
      event.preventDefault();
      this.props.transition(0,1);
   }


   render(){
      return (
         <form className = 'input-num-options' onSubmit = {this.handleSubmit}>
            <h3 className = 'question'>How many options do you have?</h3>
            <input className = 'num-of-options' type = 'number' value = {this.props.num} onChange = {this.handleChange}/>
            <br/>
            <button className = 'submit-num-input' type = 'submit'>Submit Options</button>
         </form>
      )
   }
}

export default InputNumber;