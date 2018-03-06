import React, {Component} from 'react';
import {connect} from 'react-redux';


const Task = () => {

    const handleDeleteTask = () => {
        console.log('delete task')
        onDeleteTrack()
    };
    return (
        <div>
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
        onDeleteTrack: (id) => {
            dispatch({type: "DELETE_TASK", payload: id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);