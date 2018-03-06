import React from 'react';
import {connect} from 'react-redux';


const Task = ({onDeleteTask, onToggleStatus, taskName, id, status}) => {

    const handleDeleteTask = () => {
        onDeleteTask(id)
    };
    const handleToggleStatus = () => {
        onToggleStatus(id);
        console.log('status was changed')
    };
    return (
        <div>
            <input type="checkbox" defaultChecked={status} onChange={handleToggleStatus}/>{taskName}
            <button onClick={handleDeleteTask}>X</button>
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
            dispatch({type: "DELETE_TASK", payload: id})
        },
        onToggleStatus: (id) =>{
            dispatch({type: "TOGGLE_TASK_STATUS", payload:id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);