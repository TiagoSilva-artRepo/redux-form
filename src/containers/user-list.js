import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from '../actions/index';

const UserList = ({users, selectUser}) => {

    const createListItem = () => {

       return users.map((user) => {
            return (
                <li key={user.id} onClick= { () => selectUser(user)}>
                {user.firstName} {user.lastName}
            </li>
            )
        })
    }
    return (
    <ul>{createListItem()}</ul>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
