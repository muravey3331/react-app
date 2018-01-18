import React, { Component } from "react";
import {List} from "./List";


export class KanbanBoard extends Component{
  render(){
    console.log(this.props.cards);
    return (<div className="lists-wrapper">
      <List title="ToDo" cards={this.props.cards.filter((card) => card.status === 'todo')}/>
      <List title="In Progress" cards={this.props.cards.filter((card) => card.status === 'in-progress')}/>
      <List title="Done" cards={this.props.cards.filter((card) => card.status === 'done')}/>

    </div>);
  }
}