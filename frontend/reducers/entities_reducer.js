import {combineReducers} from "redux";
import UsersReducer from "./users_reducer";
import MessagesReducer from "./messages_reducer";

const entitiesReducer = combineReducers({
    users: UsersReducer,
    messages: MessagesReducer,
});

export default entitiesReducer;