import React, { Component } from 'react';
import './stylesheets/App.css';
import Column from './components/column.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addToCol = this.addToCol.bind(this);
  }

  componentDidMount() {
    this.setState({
      columns: this.props.columns,
    });
  }

  addToCol(card, colIdx) {
    this.state.columns[colIdx].cards.push(card);
    this.setState({
      columns: this.state.columns,
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Kanban Board</h1>

        { this.props.columns.map( 
            (col, idx, arr) => 
            <Column col={col} idx={idx} lastCol={arr.length - 1} key={idx} addToCol={ this.addToCol }/>
          ) 
        }

      </div>
    );
  }
}

export default App;
