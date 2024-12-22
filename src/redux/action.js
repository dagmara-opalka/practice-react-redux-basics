export const getCurrentTime = () => ({ type: 'getCurrentTime' });

export const addUser = (name) => ({
    type: 'addUser',
    payload: { name }
});

export const removeUser = (id) => ({
    type: 'removeUser',
    payload: { id }
});

export const removeAllUsers = () => ({ type: 'removeAllUsers' });
