import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store';

const UserItem = ({ id, name }) => {
    const dispatch = useDispatch();

    const handleRemoveUser = () => {
        dispatch(removeUser({ id }));
    };

    return (
        <li>
            {name} <button onClick={handleRemoveUser}>usuń</button>
        </li>
    );
};

export default UserItem;
