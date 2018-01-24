import React, {Component} from 'react';
import TaskList from "./TaskList";


class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: 1,
                    title: "Learn HTML"
                },
                {
                    id: 2,
                    title: "Learn React"
                },
                {
                    id: 3,
                    title: "Learn javaScript"
                }
            ],
            editTaskId: null,
            taskName: "",
            isEdit: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
    }

    handleInputChange(e) {
        this.setState({taskName: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.isEdit){
            let newList = this.state.todoList;
            newList[this.state.editTaskId].title = this.state.taskName;
            this.setState({todoList: newList})
        }else{
            this.handleAddTask();
        }
    }

    handleAddTask() {
        if (this.state.taskName.length !== 0) {
            let newList = this.state.todoList.concat({id: Date.now(), title: this.state.taskName});
            this.setState({
                todoList: newList,
                taskName: ""
            });
        }
    }

    handleEditTask(taskId, taskName) {
        const taskIndex = this.state.todoList.findIndex((task) => task.id === taskId);
        this.setState({
            taskName: taskName,
            isEdit: true,
            editTaskId: taskIndex
        })
    }

    handleDeleteTask(taskId) {
        const taskIndex = this.state.todoList.findIndex((task) => task.id === taskId);
        let newList = this.state.todoList;
        newList.splice(taskIndex, 1);
        this.setState({
            todoList: newList
        })
    }

    render() {
        let btnText = this.state.isEdit ? 'EDIT' : 'ADD';
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       onChange={this.handleInputChange}
                       value={this.state.taskName}/>
                <button>{btnText}</button>

            </form>
            <TaskList taskList={this.state.todoList}
                      taskCallbacks={{
                          add: this.handleAddTask,
                          delete: this.handleDeleteTask,
                          edit: this.handleEditTask
                      }}/>
        </div>)
    }
}

export default ToDo;