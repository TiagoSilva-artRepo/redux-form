import React from "react";
import NewUserForm from "../components/NewUserForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addUser } from "../actions/index";
import { reset } from 'redux-form';

const UserForm = ({ addUser }) => {

    const submit = (values, dispatch) => {
        addUser(values);
        dispatch(reset("newUserForm"));
    }

    return <NewUserForm onSubmit={submit} />;
};

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addUser: addUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
