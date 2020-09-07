import React,  {Component} from 'react';
import styles from './styles.css';
import Header from './header';
import InputNumber from './inputNumber';
import InputOptions from './inputOptions';
import Decision from './decision';



const initialState = {
  numOfOptions: '',
  options: [{
    key:9,
    text:'nine'
  }],
  choice: '',
  currentView: 0
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = initialState;
  }

  // Update number
  updateNumber = (number) => {
    this.setState({numOfOptions: number})
  }

  //Create choice state slots
  createChoices = () => {
    let number =  this.state.numOfOptions;
    let createdOptions = [];
    for (let i = 0; i < number; i++){
      let newOption = {
        key: i,
        text: ''
      }
      createdOptions.push(newOption);
    }
    this.setState({options: [...createdOptions]});
  }

  
  changeView = (newView) => {
    this.setState({
      currentView: newView
    })
  }
  
  onType = (id, newText) => {
    let matchId = (option) => {
      if (option.key !== id){
        return option;
      } else {
        return {
          ...option, 
          text: newText
        }
      }
    }
    let updatedOptions = this.state.options.map(matchId);
    this.setState({options: updatedOptions});
  }

  makeDecision = () =>{
    //Define range

    //get Random number -1

    //set decision in state
  }


  // componentDidUpdate(){
  //   console.log(this.state);
  // }
  
  
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
            currentView = {this.state.currentView}
            createChoices = {this.createChoices}/>

          {/* hidden on load, revealed after number of options */}
          <InputOptions 
            num = {this.state.numOfOptions} 
            options = {this.state.options} 
            changeView = {this.changeView} 
            currentView = {this.state.currentView}
            numOfOptions = {this.state.numOfOptions}
            storeOption = {this.storeOption}
            onType = {this.onType}
            />

          {/* hidden on load, revealed after choice entered */}
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
