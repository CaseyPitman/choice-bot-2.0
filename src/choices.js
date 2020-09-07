import React,  {Component} from 'react';

class Choice extends Component {


   //update state from here. 

   handleChange = (event) => {
      let id = this.props.input.key;
      console.log(id);
      let text = event.target.value;
      this.props.onType(id, text);
   }


   render(){
      return (
         <input 
            className = 'choice'  
            type = 'text' 
            value = {this.props.text} 
            onChange = {this.handleChange}/>
      )
   }
}

export default Choice;