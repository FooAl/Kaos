import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";

class switchModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="createChannelModal">
                <section className="createChFormInput">
                    <div className="inviteKeyForm">
                        <span className="switchButton" onClick={() => dispatch(this.props.openModal("createServer"))}>CREATE SERVER</span>
                        <span className="switchButton" onClick={() => dispatch(this.props.openModal("joinServer"))}>JOIN SERVER</span>
                    </div>
                </section>
                <section className="createChannelFooter">
                    <span className="closeCreate" ><div onClick={this.props.closeModal}>Close</div></span>
                </section>
            </div>
        )
    }

}

const mDP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: field => dispatch(openModal(field)),
    }
}

export default withRouter(connect(null, mDP)(switchModal));