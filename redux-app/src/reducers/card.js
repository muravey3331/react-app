import {initialState} from './index';

export default function card(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        case 'TOGGLE_TASK_STATUS':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        task.done = !task.done;
                    }
                    return task;
                })
            };
        case 'EDIT_TASK':
            return {
                ...state,
                editingElem: action.id,
                tasks: state.tasks.map(task => {
                    task.isEditing = (task.id === action.id);
                    return task;
                })
            };
        case 'CHANGE_TASK_NAME':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === state.editingElem) {
                        task.name = action.name;
                    }
                    return task;
                })
            };
        case 'END_EDIT_TASK':
            return {
                ...state,
                isEditing: null,
                tasks: state.tasks.map(task => {
                    if (task.id === state.editingElem) {
                        task.isEditing = false;
                    }
                    return task;
                })
            };
        // case 'SHOW_ALL':
        //     console.log('show all');
        //     return {
        //         ...state,
        //         tasks: state.tasks
        //     };
        // case 'SHOW_ACTIVE':
        //     console.log('show active');
        //     return {
        //         ...state
        //         // tasks: state.tasks.filter(task => task.done)
        //
        //     };
        // case 'SHOW_COMPLETED':
        //     console.log('show completed');
        //     return {
        //         ...state
        //         // tasks: state.tasks.filter(task => !task.done)
        //
        //     };
        default:
            return state
    }
}