import React,  {Component} from 'react';
import styles from './styles.css';
import Header from './header';
import InputNumber from './inputNumber';
import InputOptions from './inputOptions';
import Decision from './decision';
import randomNum from './randomNum'


//State upon start and/or reset
const initialState = {
  numOfOptions: '',
  options: [{
    key:11,
    text:'none'
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

    //If moving to final screen (decision) then call for decision to be made.
    if (newView === 2) {
      let optionNum= randomNum(this.state.numOfOptions);
      let decision = this.state.options.filter((option) => option.key === optionNum);

      decision = decision[0].text;

      this.setState({
        choice: decision
      })
    }

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

 

  componentDidUpdate(){
    console.log(this.state);
  }
  
  
  reset = () =>{
    console.log('reset');
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
            choice = {this.state.choice}
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
