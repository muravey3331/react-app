import React, { Component }from 'react';
import { connect } from 'react-redux';

import Task from './Task';

class TaskList extends Component {

    render (){

        return (
            <div>
                <ul>
                    {this.props.tasks.map((task, index) => {
                        return (
                            <li key={index}>
                                <Task taskName={task.name} id={task.id}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.card.tasks
    }
};

const  mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);