import React, {Component} from 'react';
import { render } from '@testing-library/react';


class Decision extends Component {

   render(){
      let className = 'decision';
      if (this.props.currentView === 2){
         className += ' show';
      } else {
         className += ' hide'
      }

      return (
         <div className = {className}>
            <h3 className = 'result-text'>You should choose</h3>
            <h3 className = 'result'>This</h3>
            <button className = 'reset'>Make another choice.</button>
         </div>
      )
   }
}

export default Decision;