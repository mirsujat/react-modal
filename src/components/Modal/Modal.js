import React, { Component } from 'react';
import Backdrop from "./Backdrop/Backdrop";
import Portal from "./Portal";



class Modal extends Component {

// 
   
//    * @desc Dialog object providing modal focus management.
//    *
//    * Assumptions: The element serving as the dialog container is present in the
//    * DOM and hidden. The dialog container has role='dialog'.
//    *
//    * @param dialogId
//    *          The ID of the element serving as the dialog container.
//    * @param focusAfterClosed
//    *          Either the DOM node or the ID of the DOM node to focus when the
//    *          dialog closes.
//    * @param focusFirst
//    *          Optional parameter containing either the DOM node or the ID of the
//    *          DOM node to focus when the dialog opens. If not specified, the
//    *          first focusable element in the dialog will receive focus.
//    


  render() {
    console.log("Props From Modal: ", this.props);
    let content = null;
    let modalRoot = "modal-root modal-hidden";
    if (this.props.open) {
      modalRoot = "modal-root has-modal";
    }
    if (this.props.open) {
      content = (
        <div className="modal-wrapper" open={this.props.open}>
          <div className="modal">
            <div>{this.props.children}</div>
          </div>
          <Backdrop onClick={this.props.onClose} />
        </div>
      );
    }
    return (
      <Portal {...this.props}>
        <div className={modalRoot}>{content}</div>
      </Portal>
    );
  }
}

export default Modal;