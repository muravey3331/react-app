import React, {Component} from 'react';
import { CheckList} from "./CheckList";


export class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false
    };
    this.toggleState = this.toggleState.bind(this);

  }
  toggleState(){
    this.state = this.setState({showDetails: !this.state.showDetails})
  };
  render() {
    return (<div key={this.props.id}>
       <h2>{this.props.title}</h2>
      <p onClick={this.toggleState}>{this.props.description}</p>
      <CheckList tasks={this.props.tasks} />

    </div>)
  }
}