import React, { Component } from 'react'
import Card from './card.jsx'
import AddCard from './addCard.jsx'
import '../stylesheets/column.css'

export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard(text) {
    this.state.cards.push(text);
    this.setState({
      cards: this.state.cards,
    });
  }

  removeCard(idx) {
    const card = this.state.cards.splice(idx, 1)[0];
    this.setState({
      cards: this.state.cards,
    });
    return card;
  }

  componentDidMount() {
    this.setState({ cards: this.props.col.cards });
  }

  render() {
    const { name, cards, color } = this.props.col;

    return (
      <div className={`column col${this.props.idx + 1}`}>
        <h2 style={{ backgroundColor: color }}>
          { name }
        </h2>

        { cards.map( 
          (card, idx) =>
            <Card 
              card={ card }  
              idx={ idx } 
              key={ idx } 
              colIdx={ this.props.idx }
              leftArrow={ this.props.idx !== 0 }
              rightArrow={ this.props.idx !== this.props.lastCol }
              removeCard={ this.removeCard }
              addToCol={ this.props.addToCol }
            />
        )}

        <AddCard addCard={ this.addCard }/>
      </div>
    )
  }
};
