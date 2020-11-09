import React from "react";
import NewUserForm from "../components/NewUserForm";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addUser } from "../actions/index";

const UserForm = ({addUser}) => (
<NewUserForm onSubmit={(values) => addUser(values)} />
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addUser: addUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserForm);
