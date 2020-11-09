import React from 'react';
import UserForm from '../containers/user-form';
import UserList from '../containers/user-list';

const App = () => {
  return (
    <>
    <UserForm />
    <br />
    <hr />
    <br />
    <UserList />
    </>
  );
}

export default App;
