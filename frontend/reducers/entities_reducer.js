import {combineReducers} from "redux";
import UsersReducer from "./users_reducer";
import MessagesReducer from "./messages_reducer";
import ChannelsReducer from "./channels_reducer";
import ServersReducer from "./servers_reducer";
import JoinsReducer from "./joins_reducer";

const entitiesReducer = combineReducers({
    users: UsersReducer,
    messages: MessagesReducer,
    channels: ChannelsReducer,
    servers: ServersReducer,
});

export default entitiesReducer;