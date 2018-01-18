import React, {Component} from 'react';
import {Card} from "./Card";


export class List extends Component {

  render() {
    let cards = this.props.cards.map((card) =>
      (<Card title={card.title}
             description={card.description}
             id={card.id}
             tasks={card.tasks}/>)
    );
    return (

      <div className="list" >
        <h1>{this.props.title}</h1>
        {cards}

      </div>
    )
  }
}