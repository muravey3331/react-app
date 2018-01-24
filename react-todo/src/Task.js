import React, {Component} from 'react';

class Task extends Component {


    render() {
        return (<li key={this.props.id}>
            <span>{this.props.title}</span>
            <button onClick={this.props.taskCallbacks.edit.bind(null, this.props.id, this.props.title)}>edit</button>
            <button onClick={this.props.taskCallbacks.delete.bind(null, this.props.id)}>delete</button>
        </li>)
    }
}

export default Task;