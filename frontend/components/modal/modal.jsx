import React from 'react';
import {closeModal} from "../../actions/modal_actions";
import {connect} from "react-redux";
import CreateChannelModal from "../channel/create_channel_modal";
import EditChannelModal from "../channel/edit_channel_modal";
import DeleteChannelModal from "../channel/delete_channel_modal";
import CreateServerModal from "../server/create_server_modal";
import DeleteServerModal from "../server/delete_server_modal";

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
        case "editChannel":
            component = <EditChannelModal />;
            break;
        case "deleteChannel":
            component = <DeleteChannelModal />;
            break;
        case "createServer":
            component = <CreateServerModal />;
            break;        
        case "deleteServer":
            component = <DeleteServerModal />;
            break;
        default: 
            return null;
    }

    return(
        <>
            <div className="modal-background" onClick={closeModal}/>
            <section className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </section>
        </>
    )

}

const mSP = state => {
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