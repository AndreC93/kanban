import React, { Component } from 'react'
import '../stylesheets/card.css'
import '../stylesheets/arrow.css'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(dir) {
    if(dir) {
      const card = this.props.removeCard(this.props.idx);
      if (!card) return;
      if (dir === 'Left') {
        this.props.addToCol(card, this.props.colIdx - 1);
      } else if (dir === 'Right') {
        this.props.addToCol(card, this.props.colIdx + 1);
      }
    }
  }

  makeArrow(dir) {
    if (dir === 'Left' && this.props.leftArrow) {
        return (
          <p 
            className='arrow' 
            onClick={ () => this.handleArrowClick(dir) }
          >
            {"<"}
          </p>
        );
    } else if (dir === 'Right' && this.props.rightArrow) {
        return (
          <p
            className='arrow'
            onClick={ () => this.handleArrowClick(dir) }
          >
            {">"}
          </p>
        );
    }
    
    return <p className='arrow'></p>
  }

  render() {
    const left = this.makeArrow('Left');
    const right = this.makeArrow('Right');

    return (
      <div className='card'>
        {left}

        <p>{ this.props.card }</p>

        {right}
      </div>
    )
  }
}
