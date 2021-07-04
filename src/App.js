import React, {Component} from "react";

import Modal from "./components/Modal/Modal";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
       <h1>Hello From app </h1>
       <button onClick={this.handleClickOpen} className="close-btn">
            Close
          </button>
          <Modal open={this.state.open} onClose={this.handleClickClose}>
          <h1>I am modal</h1>
            <h1>I am modal</h1>
              <h1>I am modal</h1>
                <h1>I am modal</h1>
          <button onClick={this.handleClickClose} className="close-btn">
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

export default App;
