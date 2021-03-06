import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteUser } from "../actions/index";
import { editUser } from "../actions/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const UserList = ({ users, deleteUser, editUser }) => {
    const createData = (id, firstName, lastName, age, gender) => {
        return { id, firstName, lastName, age, gender };
    };

    const createListItem = () => {
        return users.map((user) => {
            return createData(user.id, user.firstName, user.lastName, user.age, user.gender);
        });
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow key="header">
                        <TableCell key="header-firstName">First Name</TableCell>
                        <TableCell key="header-lastName">Last Name</TableCell>
                        <TableCell key="header-age">Age</TableCell>
                        <TableCell key="header-gender">Gender</TableCell>
                        <TableCell key="header-edit">Edit</TableCell>
                        <TableCell key="header-delete">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody key="body">
                    {createListItem().map((user) => (
                        <TableRow key={user.id}>
                            <TableCell key={"firstName-row-" + user.id}>{user.firstName}</TableCell>
                            <TableCell key={"lastName-row-" + user.id}>{user.lastName}</TableCell>
                            <TableCell key={"age-row-" + user.id}>{user.age}</TableCell>
                            <TableCell key={"gender-row-" + user.id}>{user.gender}</TableCell>
                            <TableCell key={"edit-row-" + user.id}>
                                <Button
                                    key={"button-edit-" + user.id}
                                    onClick={() => editUser(user)}
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                >
                                    Edit
                                </Button>
                            </TableCell>
                            <TableCell key={"delete-row-" + user.id}>
                                <Button
                                    key={"button-delete-" + user.id}
                                    onClick={() => deleteUser(user.id)}
                                    color="secondary"
                                    variant="outlined"
                                    size="small"
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

function mapStateToProps(state) {
    return {
        users: state.users.all,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteUser: deleteUser, editUser: editUser }, dispatch);
} 

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
