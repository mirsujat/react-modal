import React, { Component, Fragment } from 'react';
import Portal from "./Portal/Portal";
import Backdrop from "./Backdrop/Backdrop";

const Modal = () =>{
  return(
    <Fragment>
      <Portal></Portal>
      <Backdrop></Backdrop>
    </Fragment>
  )
}

export default Modal;

