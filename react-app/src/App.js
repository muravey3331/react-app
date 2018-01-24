import React, {Component} from 'react';
import KanbanBoard from "./KanbanBoard";
import './App.css';

// import 'whatwg-fetch';
const API_URL = './todo.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }



    componentDidMount() {
        fetch(API_URL)
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

    addTask(cardId, taskName) {

    }

    deleteTask(cardId, taskId, taskIndex) {

    }

    toggleTask(cardId, taskId, taskIndex) {

    }

    render() {
        return <KanbanBoard cards={this.state.todoList}
                            taskCallbacks={{
                                toggle: this.toggleTask,
                                delete: this.deleteTask,
                                add: this.addTask
                            }}/>
    }
}

export default App;