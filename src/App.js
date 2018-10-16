import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import { dog, cat } from './pets';

import './App.css';

class App extends Component {
  state = {
    dog,
    cat
  };

  render() {
    return (
      <div className="App">
        <Dashboard dogToAdopt={this.state.dog} catToAdopt={this.state.cat} />
      </div>
    );
  }
}

export default App;
