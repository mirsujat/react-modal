import React, { Component } from 'react';
import Backdrop from "./Backdrop/Backdrop";
import Portal from "./Portal";



class Modal extends Component {
  render() {
    console.log("Props From Modal: ", this.props);
    let content = null;
    let modalRoot = "modal-root modal-close";
    if (this.props.open) {
      modalRoot = "modal-root modal-open";
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