const initialState = {
    name: 'My first card',
    tasks:[
        {
            id:1,
            name: 'Learn ReactJS',
            done: true
        },
        {
            id:2,
            name: 'Learn Redux',
            done: false
        },
        {
            id:3,
            name: 'Learn NodeJS',
            done: true
        }
    ]
};

export default function card(state = initialState, action) {
    switch (action.type){
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        default: return state
    }

}