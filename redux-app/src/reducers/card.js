const initialState = {
    name: 'My first card',
    tasks:[
        {
            id:1,
            name: 'Learn ReactJs'
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

        default: return state
    }

}