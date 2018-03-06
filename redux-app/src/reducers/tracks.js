const initialState = [
        "Smells like teen spirit",
        "Ender sandman"
    ];

export default function playlist(state = initialState, action) {
    switch (action.type ){
        case "ADD_TRACK":
            return [
                ...state, action.payload
            ];
        case "DELETE_TRACK":
            return [
                ...state, action.payload
            ];
        default: return state;
    }
}