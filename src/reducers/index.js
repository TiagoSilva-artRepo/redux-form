import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Users } from "./reducer-users";

export default combineReducers({
    users: Users,
    form: formReducer,
});
