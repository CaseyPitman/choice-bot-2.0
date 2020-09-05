import React, {Component} from 'react';


class InputNumber extends Component {


   handleChange = (event) =>{
      let number = event.target.value;
      this.props.updateNumber(number)
   }

   //click handler onSubmit calls submitNumber function
   handleSubmit = (event) => {
      event.preventDefault();
      
   }

   render(){
      let className = 'input-num-options';
      console.log(this.props.visibility)
      if (this.props.currentView === 0){
         className += ' show';
      } else {
         className += ' hide'
      }

      return (
         <form className = {className} onSubmit = {this.handleSubmit}>
            <h3 className = 'question'>How many options do you have?</h3>
            <input className = 'num-of-options' type = 'number' value = {this.props.num} onChange = {this.handleChange}/>
            <br/>
            <button className = 'submit-num-input' type = 'submit'>Submit Options</button>
         </form>
      )
   }
}

export default InputNumber;