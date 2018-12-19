import React, { Component } from 'react'
import '../stylesheets/card.css'

export default class AddCard extends Component {
  addCard() {
    const text = window.prompt("What do you want the card to say?");
    if(text) this.props.addCard(text);
  }

  render() {
    return (
      <div onClick={ () => this.addCard() } className='card addCard'>
        <p></p>
        <p>+Add a Card</p>
        <p></p>
      </div>
    )
  }
}
