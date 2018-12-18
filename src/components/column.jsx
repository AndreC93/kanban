import React, { Component } from 'react'
import Card from './card.jsx'

export default class Column extends Component {
  render() {
    const { name, cards, color } = this.props.column;

    return (
      <div className='column'>
        { name }
        { cards.map( 
          (card, idx) =>
          <Card card={card} idx={idx} key={idx}/>
        ) }
        { color }
      </div>
    )
  }
};
