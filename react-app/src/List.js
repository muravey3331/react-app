import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";


export class List extends Component {

    render() {
        let cards = this.props.cards.map((card) =>
            (<Card key={card.id}
                   title={card.title}
                   description={card.description}
                   id={card.id}
                   tasks={card.tasks}
                   color={card.color}
                   askCallbacks={this.props.taskCallbacks}/>)
        );
        return (<div className="list">
            <h1>{this.props.title}</h1>
            {cards}
        </div>)
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default List;