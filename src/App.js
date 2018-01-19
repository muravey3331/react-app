import React, {Component} from 'react';
import KanbanBoard from "./KanbanBoard";
import './App.css';

// import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        };
    }

    componentDidMount() {
        fetch('./todo.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        todoList: result.todo
                    });
                },
                (error) => {
                    console.log('Error fetching and parsing data', error);
                });
    }

    render() {
        return <KanbanBoard cards={this.state.todoList}/>
    }
}

export default App;