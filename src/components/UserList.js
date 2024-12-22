import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../store';
import UserItem from './UserItem';

class UserList extends Component {
    state = { name: '' };

    handleInputChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleAddUser = (e) => {
        e.preventDefault();
        const { name } = this.state;
        if (name.trim()) {
            this.props.addUser({ name });
            this.setState({ name: '' });
        }
    };

    render() {
        const { users } = this.props;

        return (
            <>
                <form onSubmit={this.handleAddUser}>
                    <div>
                        <input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map((user) => (
                        <UserItem key={user.id} id={user.id} name={user.name} />
                    ))}
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = {
    addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
