import React, { Component } from 'react';
import ReactDOM from "react-dom"

const portal = (WrappedComponent) =>{
  return class extends Component{
    render(){
      // Wraps the input component in a container, without mutating it.
      <WrappedComponent {...this.props} />;
    }
  }
}

export default portal;
