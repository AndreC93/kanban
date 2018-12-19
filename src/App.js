import React, { Component } from 'react';
import './stylesheets/App.css';
import Column from './components/column.jsx';
import AddColButton from './components/addColButton.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addToCol = this.addToCol.bind(this);
    this.addCol = this.addCol.bind(this);
    this.defaultColors = ['#2A92BF', '#F4CE46', '#00B961'];
  }

  addCol() {
    const col = { cards: [] };
    col.name = window.prompt('What do you want to name the column?');
    col.color = this.getColor();
    this.state.columns.push(col);
    this.setState({
      columns: this.state.columns,
    });
  }

  getColor() {
    const color = this.defaultColors.shift();
    this.defaultColors.push(color);
    return color;
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

        <AddColButton addCol={ this.addCol }/>
      </div>
    );
  }
}

export default App;
