import React from 'react';
import {connect} from 'react-redux';


const Task = ({onDeleteTask, onToggleStatus, onEditTask, onChangeTaskName, onEndEditTask, taskName, id, status, isEditing}) => {

    const handleDeleteTask = () => {
        onDeleteTask(id)
    };
    const handleToggleStatus = () => {
        onToggleStatus(id);
    };
    const handleEditTask = () => {
        onEditTask(id);
    };
    const handleChangeTaskName = (e) => {
        onChangeTaskName(e.target.value)
    };
    const handleEndEditTask = () => {
        taskName ? onEndEditTask() : onDeleteTask(id);
    };

    const task = (
        <div className="task__text"
             onDoubleClick={handleEditTask}>
            <span>{taskName}</span>
            <button className="delete-btn" onClick={handleDeleteTask}>X</button>
        </div>
    );
    const taskInput = (
        <input className="edit-field"
               onChange={handleChangeTaskName}
               onBlur={handleEndEditTask}
               defaultValue={taskName}
               type="text"
               autoFocus/>
    );

    return (
        <div  className="task-item">
            <input type="checkbox"
                   checked={status}
                   onChange={handleToggleStatus}/>
            {isEditing ? taskInput : task}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        state: state.card
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTask: (id) => {
            dispatch({type: "DELETE_TASK", id})
        },
        onToggleStatus: (id) => {
            dispatch({type: "TOGGLE_TASK_STATUS", id})
        },
        onEditTask: (id) => {
            dispatch({type: "EDIT_TASK", id})
        },
        onChangeTaskName: (name) => {
            dispatch({type: "CHANGE_TASK_NAME", name})
        },
        onEndEditTask: () => {
            dispatch({type: "END_EDIT_TASK"})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);