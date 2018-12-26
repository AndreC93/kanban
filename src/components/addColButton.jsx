import React, { Component } from 'react';
import '../stylesheets/addColButton.css';

export default class AddColButton extends Component {
  render() {
    return (
      <div className='addColButton' onClick={ this.props.addCol }>
        <p>Add Column</p>
      </div>
    )
  }
}
