import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CheckList extends Component {
    checkInputKeyPress(evt) {
        if (evt.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
            evt.target.value = '';
        }
    }

    render() {
        let checkList = this.props.tasks.map((task) =>
            <li key={task.id} className="checklist__task">
                <input type="checkbox"
                       defaultChecked={task.done}
                       onChange={
                           this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)
                       }/>
                {task.name}
                <button className="task__remove"
                        onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}>X
                </button>

            </li>);
        return (<div>
                <ul className="check-list">{checkList}</ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="Type then hit Enter to add a task"
                       onKeyPress={this.checkInputKeyPress.bind(this)}/>
            </div>

        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;