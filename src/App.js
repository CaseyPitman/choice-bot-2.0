import React,  {Component} from 'react';
import styles from './styles.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numOfOptions: 0,
      options: [],
      choice: ''
    }
  }

  render(){
    return (
      <div className='App'>

        <header className='header'>
          <h1 className ='headline'>Choicebot 2.0</h1>
          <h2 className = 'subHeadline'>Let me decide for you indecisive human. </h2>
          <img className = 'robotImage' src={require('./choice-bot.jpg')} alt = 'The Choicebot'/>
        </header>

        <main className = 'container'>
          {/* Visible on load */}
          <form className = 'inputNumOptions'>
            <h3 className = 'question'>How many options do you have?</h3>
            <input className = 'numOfOptions' type = 'number'/>
            <button className = 'submitNumInput' type = 'submit'>Submit Options</button>
          </form>

          {/* hidden on load, revealed after number of options */}

          <form className = 'inputOptions'>
            <h3 className= 'question'> Enter your options.</h3>
            <div className = 'choices'>
              <input className = 'choice1' type = 'text'/>
              <input className = 'choice1' type = 'text'/>
              <input className = 'choice1' type = 'text'/>
            </div>
            <button className = 'submitOptions' type = 'submit'>Make a decision.</button>
          </form>

          {/* hidden on load, revealed after number of options */}



          <div className = 'decision'>
            <h3 className = 'resultText'>You should choose</h3>
            <h3 className = 'result'>This</h3>
            <button className = 'reset'>Make another choice.</button>
          </div>


        </main>
        <footer className = 'footer'>
          <h4 className = 'copyright'>&copy; 2020 | Casey Pitman </h4>
        </footer>

      </div>
    );
  }
}

export default App;
