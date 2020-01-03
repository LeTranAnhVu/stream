import React from 'react';
import ReactDOM from 'react-dom';
import history from "../history";

const Modal = (props) => {

    return ReactDOM.createPortal((
        <div onClick={() => typeof props.onOutClick === 'function' ? props.onOutClick(): null} className="ui dimmer modals visible active">
            <div  onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title || ''}</div>
                <div className="content">
                    <p>{props.content || ''}</p>
                </div>
                <div className="actions">
                    <div onClick={() => typeof props.onApprove === 'function' ? props.onApprove(): null} className="ui approve negative button">{props.textApproveBtn || 'Approve'}</div>
                    <div onClick={() => typeof props.onCancel === 'function' ? props.onCancel(): null} className="ui cancel button">{props.textCancelBtn || 'Cancel'}</div>
                </div>
            </div>
        </div>
    ), document.querySelector('#modal'));
};


export default Modal;
