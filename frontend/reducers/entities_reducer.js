import {combineReducers} from "redux";
import UsersReducer from "./users_reducer";
import MessagesReducer from "./messages_reducer";
import ChannelsReducer from "./channels_reducer";

const entitiesReducer = combineReducers({
    users: UsersReducer,
    messages: MessagesReducer,
    channels: ChannelsReducer,
});

export default entitiesReducer;