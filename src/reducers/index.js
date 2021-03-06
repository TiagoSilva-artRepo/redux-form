import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { usersReducer } from "./reducer-users";

export default combineReducers({
    form: formReducer,
    users: usersReducer,
});
