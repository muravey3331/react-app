import {combineReducers} from 'redux';
import card from './card';
import task from './task';

export const initialState = {
    editingElem: null,
    name: 'My first card',
    description: 'card description',
    tasks:[
        {
            id:1,
            name: 'Learn ReactJS',
            done: true,
            isEditing: false
        },
        {
            id:2,
            name: 'Learn Redux',
            done: true,
            isEditing: false
        },
        {
            id:3,
            name: 'Learn NodeJS',
            done: false,
            isEditing: false
        }
    ]
};

export default combineReducers(
    {
        card,
        task
    }
);