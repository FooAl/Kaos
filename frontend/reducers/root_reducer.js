import {combineReducers} from "redux";
import session_reducer from "./session_reducer";

const rootReducer = combineReducers({
    session: session_reducer,
});

export default rootReducer;