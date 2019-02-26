import React, { Component } from 'react';
import Main from '../main/routes';
import './App.css';
import 'whatwg-fetch';
import Series from '../../containers/series';

class App extends Component {
  
  

  render() {
    return (
      <div className="App">
      <h2> TV Series</h2>
        <header className="App-header">
          
        <Main />
        </header>
      </div>
    );
  }
}

export default App;
