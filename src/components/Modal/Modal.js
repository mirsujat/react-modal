import React, { Component } from 'react';
import Backdrop from "./Backdrop/Backdrop";
import Portal from "./Portal";



class Modal extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.modalRef = React.createRef();
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
 
focus() {
  // Explicitly focus the text input using the raw DOM API
  // Note: we're accessing "current" to get the DOM node
  return this.modalRef.current.focus();
}

componentDidMount(){
 return console.log("refer11 to ref", this.modalRef.current);
  }


  render() {
    
    console.log("Props From Modal: ", this.props);
    console.log("ref", this.modalRef.current);
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
        tab-index="100"
        
 >
          <div className="modal">
            <div>{this.props.children}</div>
          </div>
          <Backdrop onClick={this.props.onClose} />
        </div>
      );
    }
    if(content !== null){
       console.log("refer to ref", this.modalRef.current);
    }

   
    return (
      <Portal {...this.props}>
        <>{content}</>
      </Portal>
    );
  }
}

export default Modal;