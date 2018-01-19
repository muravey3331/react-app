import React, { Component} from "react";
import PropTypes from 'prop-types';
import List from "./List";


class KanbanBoard extends Component{

  render(){

    return (<div className="lists-wrapper">
      <List id='todo' title="ToDo" cards={this.props.cards.filter((card) => card.status === 'todo')}/>
      <List id='in-progress' title="In Progress" cards={this.props.cards.filter((card) => card.status === 'in-progress')}/>
      <List id='done' title="Done" cards={this.props.cards.filter((card) => card.status === 'done')}/>
    </div>);
  }

}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default KanbanBoard;

