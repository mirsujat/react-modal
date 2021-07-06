import React, { Component } from 'react';
import Backdrop from "./Backdrop/Backdrop";
import Portal from "./Portal";



class Modal extends Component {
  constructor(props) {
    super(props);
  
  
  }

   
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
 




  render() {
    
    console.log("Props From Modal: ", this.props);

    let content = null;
    let modalClass = "modal-wrapper modal-hidden";
    if (this.props.open) {
      modalClass = "modal-wrapper has-modal";
    }
    if(this.props.open && !this.props.id ) alert ("Modal must have an id.");

    if (this.props.open && this.props.id) {
      content = ( 
        <div 
        className={modalClass} 
        open={this.props.open} 
        role="dialog"
        id={this.props.id}
        aria-labelledby={this.props.label}
        aria-modal="true"
        ref={this.modalRef}
       
        
        
 >
          <div className="modal">
            <div>{this.props.children}</div>
          </div>
          <Backdrop onClick={this.props.onClose} />
        </div>
      );
    }


   
    return (
      <Portal {...this.props}>
        <>{content}</>
      </Portal>
    );
  }
}

export default Modal;