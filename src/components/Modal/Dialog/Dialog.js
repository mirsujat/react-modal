import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.container = document.createElement("div");
  }
  componentDidMount() {
    let elem = document.body.appendChild(this.container);
    return elem;
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

// We will use Dialog as Modal rendered in client side
class Dialog extends Component {
  state = {
    
  };
  render() {
    let content = <noscript />;
    if (this.props.isOpen) {
      content = (
          <div className="modal">{this.props.children} </div>
      );
    }
    return (
      <Portal>
        {content}
      </Portal>
    );
  }
}

export default Dialog;