var initialState = {
    items: [],
    count: 0
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                items: [...state.items, action.item]
            };
        case 'REMOVE':
            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.idx),
                    ...state.items.slice(action.idx + 1)
                ]
            };
        case 'INCREMENT':
            return { ...state, count: state.count + action.count };
        default:
            return state;
    }
};

export default messageReducer;
