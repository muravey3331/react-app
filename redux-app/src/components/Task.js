import React from 'react';
import {connect} from 'react-redux';


const Task = ({onDeleteTask, taskName, id}) => {

    const handleDeleteTask = () => {
        console.log('delete task');
        onDeleteTask(id)
    };
    return (
        <div>{taskName}
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