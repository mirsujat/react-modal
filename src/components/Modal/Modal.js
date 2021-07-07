import React, { Component } from 'react';
import Backdrop from "./Backdrop/Backdrop";
import Portal from "./Portal";
import FocusTrap from "focus-trap-react";



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
   

    if (this.props.activateModal) {
      content = ( 
        <FocusTrap 
          titleText="demo one"
          onExit={this.props.onExit}
          initialFocus={this.props.initialFocus}
          underlayStyle={{ paddingTop: '2em' }}
         getApplicationNode={this.props.getApplicationNode}
        
 >
          <div className="modal" >
            <div>{this.props.children}</div>
            <Backdrop  />
          </div>
          
        </FocusTrap>
      );
    }


   
    return (
    <Portal>
       <div>{content}</div>
    </Portal>
       
  
    );
  }
}

export default Modal;