const initialState = {
    message: 'Działa!',
    time: new Date(),
    users: []
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return { ...state, time: new Date() };
        case 'addUser': {
            const newId = state.users.length > 0 
                ? Math.max(...state.users.map(user => user.id)) + 1 
                : 1;
            return {
                ...state,
                users: [...state.users, { id: newId, name: action.payload.name }]
            };
        }
        case 'removeUser':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            };
        case 'removeAllUsers':
            return { ...state, users: [] };
        default:
            return state;
    }
};
