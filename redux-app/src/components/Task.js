import React from 'react';
import {connect} from 'react-redux';


const Task = ({onDeleteTask, taskName, id, status}) => {

    const handleDeleteTask = () => {
        onDeleteTask(id)
    };
    console.log(status);

    return (
        <div>
            <input type="checkbox" defaultChecked={status}/>
            {taskName}
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);