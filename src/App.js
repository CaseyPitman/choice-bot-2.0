import React,  {Component} from 'react';
import styles from './styles.css';
import Header from './header';
import InputNumber from './inputNumber';
import InputOptions from './inputOptions';
import Decision from './decision'



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numOfOptions: 0,
      options: [],
      choice: ''
    }
  }

  //submit numbers

  //submit choices

  //make decision

  

  render(){
    return (
      <div className='App'>
        <Header/>

        <main className = 'container'>
          {/* Visible on load */}
          <InputNumber/>

          {/* hidden on load, revealed after number of options */}
          <InputOptions/>

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
