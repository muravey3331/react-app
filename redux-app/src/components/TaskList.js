import React from 'react';
import {connect} from 'react-redux';

import Task from './Task';

const TaskList = ({tasks}) => {

    return (
        <div>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <Task taskName={task.name} id={task.id} status={task.done}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        tasks: state.card.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);