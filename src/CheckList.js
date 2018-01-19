import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CheckList extends Component {

    render() {
        let checkList = this.props.tasks.map((task) =>
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <button className="task__remove">X</button>

            </li>);
        return (<div>
            <ul className="check-list">{checkList}</ul>
            <input type = "text"
                className = "checklist--add-task"
                placeholder = "Type then hit Enter to add a task" />
            </div>

        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;