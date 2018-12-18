import React, { Component } from 'react';
import './App.css';
import Column from './components/column.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.columns.map( 
          (col, idx, arr) => 
          <Column column={col} idx={idx} arr={arr} key={idx} />
        ) }
      </div>
    );
  }
}

export default App;
