import React, { Component } from 'react';

import Data from './components/ExampleData.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Data />
      </div>
    );
  }
}

export default App;
