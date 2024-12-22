import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAllUsers } from './../redux/actions';

const Task05 = () => {
    const dispatch = useDispatch();

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={() => dispatch(removeAllUsers())}>remove all users</button>
        </section>
    );
};

export default Task05;
