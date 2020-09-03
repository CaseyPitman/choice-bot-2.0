import React,  {Component} from 'react';
import styles from './styles.css';
import Header from './header';
import InputNumber from './inputNumber';
import InputOptions from './inputOptions';
import Decision from './decision';
import FadeProps from 'fade-props'




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numOfOptions: 0,
      options: [],
      choice: '',
     
    }
  }


  // Update number
  updateNumber = (number) => {
    this.setState({numOfOptions: number})
  }

  componentDidUpdate(){
    console.log(this.state.numOfOptions)
  }

  transition (from, to){
    //tell UI to disappear one screen and reapppear the next
    
  }


  //alter visible screen

  render(){
    return (
      <div className='App'>
        <Header/>

        <main className = 'container'>
          {/* Visible on load */}

          <InputNumber num = {this.state.numOfOptions} updateNumber = {this.updateNumber} transition = {this.transition}/>

          {/* hidden on load, revealed after number of options */}
          <InputOptions num = {this.state.numOfOptions} options = {this.state.options}/>

          {/* hidden on load, revealed after number of options */}
          <Decision/>



        </main>

        <footer className = 'copyright'>
          <h4 className = 'copyright-text'><span className = 'copyright-symbol'>&copy;</span> 2020 | Casey Pitman </h4>
        </footer>
      </div>
    );
  }
}

export default App;
