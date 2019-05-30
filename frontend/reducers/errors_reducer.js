import {combineReducers} from "redux";
import SessionErrorsReducers from "./session_errors_reducer";

const errorsReducer = combineReducers({
    errors: SessionErrorsReducers,
});

export default errorsReducer;