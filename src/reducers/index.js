import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  Users  from './reducer-users';
import UserReducer from './add-user';

export default combineReducers({
    users: Users,
    manageUser: UserReducer,
    form: formReducer
});