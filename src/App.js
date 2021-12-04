import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  state = {
    selected1: '',
    selected2: '',
    selected3: '',
    selected4: '',
  };

  componentDidMount() {
    this.setState({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  }

  selectedone = (e) => {
    e.preventDefault();
    this.setState({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  };

  selectedtwo = (e) => {
    e.preventDefault();
    this.setState({
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    });
  };

  selectedthree = (e) => {
    e.preventDefault();
    this.setState({
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    });
  };

  selectedfour = (e) => {
    e.preventDefault();
    this.setState({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            state={this.state}
            selectedone={this.selectedone}
            selectedtwo={this.selectedtwo}
            selectedthree={this.selectedthree}
            selectedfour={this.selectedfour}
          />
         <Circles state={this.state} /> 
        </main>
      </div>
    );
  }
}

export default App;
