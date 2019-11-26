
const initialState = {
    counter: 0
};

function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_BONUS":
            return { ...state, counter: state.counter + action.value };
        case "LEVEL_COMPLETED":
            return { ...state, counter: state.counter + action.value };
        case "LIFE_LOST":
            return { ...state, counter: state.counter - action.value };
        default:
            return state;
    }
}

export default rootReducers;
