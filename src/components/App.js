import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        message: 'Działa!',
        time: new Date(),
        users: [] 
    },
    reducers: {
        getCurrentTime: (state) => {
            state.time = new Date();
        },
        addUser: (state, action) => {
            const newId = state.users.length > 0 
                ? Math.max(...state.users.map(user => user.id)) + 1 
                : 1;
            state.users.push({ id: newId, name: action.payload.name });
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        },
        removeAllUsers: (state) => {
            state.users = [];
        }
    }
});

export const { getCurrentTime, addUser, removeUser, removeAllUsers } = appSlice.actions;


const store = configureStore({
    reducer: appSlice.reducer
});


const App = () => {
    return (
        <Provider store={store}>
            <Task01 />
            <Task02 />
            <Task03 />
            <Task04 />
            <Task05 />
        </Provider>
    );
};

export default App;
