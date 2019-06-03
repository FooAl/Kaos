import React from "react";
import {connect} from "react-redux";
import MessageForm from "./message_form";

const mSP = state => {
    return({
        current_user: state.session.id
    });
};

export default connect(mSP, null)(MessageForm);