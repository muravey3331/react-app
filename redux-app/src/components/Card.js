import React, { Component }from 'react';

import TaskList from './TaskList';
import Input from './Input';

export default class Card extends Component {
    render (){
        return (
            <div>
                <h1>Card name</h1>
                <p>Card description</p>
                <TaskList />
                <Input />
            </div>
        )
    }
}