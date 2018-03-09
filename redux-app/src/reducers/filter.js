import {initialState} from "./index";

export default function filter(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_ALL':
            console.log('show all');
            return state ;
        case 'SHOW_ACTIVE':
            console.log('show active');
            return {
                ...state,
                tasks: state.tasks.filter(task => task.done)
            };
        case 'SHOW_COMPLETED':
            console.log('show completed');
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.done)
            };
        default:
            return state
    }
}