import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const UserList = ({ users, selectUser }) => {
    const createData = (firstName, lastName, age, gender) => {
        return { firstName, lastName, age, gender };
    };

    const createListItem = () => {
        return users.map((user) => {
            return createData(user.firstName, user.lastName, user.age, user.gender);
        });
    };

    return (
        <ul>
            {" "}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {createListItem().map((row) => (
                            <TableRow key={row.firstName}>
                                <TableCell>
                                    {row.firstName}
                                </TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell><Button color="primary" variant="outlined" size="small">Edit</Button></TableCell>
                                <TableCell><Button color="secondary" variant="outlined" size="small">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ul>
    );
};

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
