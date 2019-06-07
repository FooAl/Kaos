import React from 'react';
import {closeModal} from "../../actions/modal_actions";
import {connect} from "react-redux";
import CreateChannelModal from "../channel/create_channel_modal";
import EditChannelModal from "../channel/edit_channel_modal";
import DeleteChannelModal from "../channel/delete_channel_modal";
import CreateServerModal from "../server/create_server_modal";
import DeleteServerModal from "../server/delete_server_modal";
import EditServerModal from "../server/edit_server_modal";
import InviteKeyModal from "../server/invite_key_modal";
import JoinServerModal from "../server/join_server_modal";
import LeaveServerModal from "../server/leave_server_modal";
import SwitchFormModal from "../server/switch_modal";

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
        case "editServer":
            component = <EditServerModal />;
            break;
        case "shareServer":
            component = <InviteKeyModal />;
            break;
        case "joinServer":
            component = <JoinServerModal />;
            break;
        case "leaveServer":
            component = <LeaveServerModal />;
            break;
        case "switchForm":
            component = <SwitchFormModal />;
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