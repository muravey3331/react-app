const initialState = {
    name: 'My first card',
    tasks:[
        {
            id:1,
            name: 'Learn ReactJS'
        },
        {
            id:2,
            name: 'Learn Redux'
        },
        {
            id:3,
            name: 'Learn NodeJS'
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
            console.log(state.tasks);
            console.log(action.payload);
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        default: return state
    }

}