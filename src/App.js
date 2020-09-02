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
          <div className = 'headlines'>
            <h1 className ='main-headline'>Choice Bot </h1>
            <h2 className = 'version-text'>v.2.0</h2>
            <h2 className = 'sub-headline'>Put your fate in my robotic hands puny human. </h2>
          </div>
          <img className = 'robot-image' src={require('./choice-bot.jpg')} alt = 'The Choicebot'/>
        </header>

        <main className = 'container'>
          {/* Visible on load */}
          <form className = 'input-num-options'>
            <h3 className = 'question'>How many options do you have?</h3>
            <input className = 'num-of-options' type = 'number'/>
            <br/>
            <button className = 'submit-num-input' type = 'submit'>Submit Options</button>
          </form>

          {/* hidden on load, revealed after number of options */}

          <form className = 'input-options'>
            <h3 className= 'question'> Enter your options.</h3>
            <div className = 'choices'>
              <input className = 'choice1' type = 'text'/>
              <br/>
              <input className = 'choice1' type = 'text'/>
              <br/>
              <input className = 'choice1' type = 'text'/>
            </div>
            <button className = 'submit-options' type = 'submit'>Make a decision.</button>
          </form>

          {/* hidden on load, revealed after number of options */}



          <div className = 'decision'>
            <h3 className = 'result-text'>You should choose</h3>
            <h3 className = 'result'>This</h3>
            <button className = 'reset'>Make another choice.</button>
          </div>


        </main>

        <footer className = 'copyright'>
          <h4 className = 'copyright-text'><span className = 'copyright-symbol'>&copy;</span> 2020 | Casey Pitman </h4>
        </footer>
      </div>
    );
  }
}

export default App;
