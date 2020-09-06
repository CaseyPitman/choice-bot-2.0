import React,  {Component} from 'react';
import styles from './styles.css';
import Header from './header';
import InputNumber from './inputNumber';
import InputOptions from './inputOptions';
import Decision from './decision';
import domElements from './domElements'


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

  // componentDidUpdate(){
  //   console.log(this.state);
  // }

  changeView = (newView) => {
    this.setState({
      currentView: newView
    })
  }


  // Store options in state
  // storeOption = (id) => {
  //   let newOption = {key: id, option: ''};
  //   let updatedOptions = this.state.options.slice();
  //   updatedOptions.push(newOption);
  //   this.setState({
  //     options: updatedOptions
  //   })
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
            storeOption = {this.storeOption}/>

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
