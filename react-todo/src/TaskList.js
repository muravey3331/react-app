import React, {Component} from 'react';
import Task from "./Task";

class TaskList extends Component {


    render() {
        const tasks = this.props.taskList.map((elem, index) => {
            return (
                <Task key={index}
                      title={elem.title}
                      id={elem.id}
                      taskCallbacks={this.props.taskCallbacks}
                />
            )
        });
        return (<div>
            <ul>{tasks}</ul>

        </div>)
    }
}

export default TaskList;