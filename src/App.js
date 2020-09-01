import React,  {Component} from 'react';


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
          <form className = 'input'>
            <h3>How many options do you have?</h3>
            <input className = 'optionsInput' type = 'number'/>
            <button className = 'submitInput' type = 'submit'>Submit</button>
          </form>

          {/* hidden on load, revealed after number of options */}

        </main>
        <footer className = 'footer'>
          <h4 className = 'copyright'>&copy; 2020 | Casey Pitman </h4>
        </footer>

      </div>
    );
  }
}

export default App;
