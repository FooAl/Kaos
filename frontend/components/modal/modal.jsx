import React from 'react';
import {closeModal} from "../../actions/modal_actions";
import {connect} from "react-redux";
import CreateChannelModal from "../channel/create_channel_modal";

//import forms here

function Modal ({modal, closeModal}){
    if (!modal){
        return null;
    }
    let component;

    switch (modal){
        //cases for each modal
        case "createChannel":
            component = <CreateChannelModal />;
            break;
        default: 
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <section className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </section>
        </div>
    )

}

const mSP = state => {
    debugger
    return {
        modal: state.modal
    };
};

const mDP = dispatch =>{
    return{
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mSP, mDP)(Modal);