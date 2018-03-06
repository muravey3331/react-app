import React, {Component} from 'react';
import {connect} from 'react-redux'

const Input = ({onAddTrack}) => {

    const handleAddTask = () => {
        console.log('add task', this.taskName.value);
        onAddTrack(this.taskName.value);
        this.taskName.value = '';
    };

    return (
        <div>
            <input type="text" ref={input => this.taskName = input} placeholder="add new task"/>
            <button onClick={handleAddTask}>add Task</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: "ADD_TASK", payload})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
