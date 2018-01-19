import React, {Component} from 'react';
import CheckList from "./CheckList";
import PropTypes from 'prop-types';


export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        };
        this.toggleDetails = this.toggleDetails.bind(this);

    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails})
    };

    render() {
        let showDetail;
        if (this.state.showDetails) {
            showDetail = <div>
                {this.props.description}
                <CheckList tasks={this.props.tasks}/>
            </div>
        }
        let cardStyle = {
            borderLeftWidth: 10,
            borderLeftColor: this.props.color,
            borderLeftStyle: 'solid'
        };
        return (<div key={this.props.id} className="card" style={cardStyle}>
            <h2 className={
                this.state.showDetails ? "card__title card__title--is-open" : "card__title"
            } onClick={this.toggleDetails} >{this.props.title}</h2>

            {showDetail}

        </div>)
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Card;