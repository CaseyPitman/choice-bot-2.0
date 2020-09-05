import React,  {Component} from 'react';
import styles from './styles.css';
import Header from './header';
import InputNumber from './inputNumber';
import InputOptions from './inputOptions';
import Decision from './decision';
import domElements from './domElements'


const initialState = {
  numOfOptions: '',
  options: [],
  choice: '',
  currentView: 0
}

class App extends Component {
  constructor(props){
    super(props);

    // this.initialState = {
    //   numOfOptions: '',
    //   options: [],
    //   choice: '',
    //   currentView: 0
    // }

    this.state = initialState;
  }


  // Update number
  updateNumber = (number) => {
    this.setState({numOfOptions: number})
  }

  componentDidUpdate(){
    console.log(this.state.numOfOptions)
  }


  changeView = (newView) => {
    this.setState({
      currentView: newView
    })
  }


  reset = () =>{
    this.setState(initialState);
  }

  render(){
    return (
      <div className='App'>
        <Header/>

        <main className = 'container'>
          {/* Visible on load */}
          
          <InputNumber 
            num = {this.state.numOfOptions} 
            updateNumber = {this.updateNumber} 
            changeView = {this.changeView} 
            currentView = {this.state.currentView}/>

          {/* hidden on load, revealed after number of options */}
          <InputOptions 
            num = {this.state.numOfOptions} 
            options = {this.state.options} 
            changeView = {this.changeView} 
            currentView = {this.state.currentView}/>

          {/* hidden on load, revealed after number of options */}
          <Decision 
            changeView = {this.changeView} 
            currentView = {this.state.currentView}
            reset = {this.reset}/>

        </main>

        <footer className = 'copyright'>
          <h4 className = 'copyright-text'><span className = 'copyright-symbol'>&copy;</span> 2020 | Casey Pitman </h4>
        </footer>
      </div>
    );
  }
}

export default App;
