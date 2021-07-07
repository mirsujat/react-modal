import React, {Component} from "react";

import Modal from "./components/Modal/Modal";

import './App.css';

class App extends Component {
 constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode.bind(this);
  }

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  getApplicationNode = () => {
    return document.getElementById('react-modal-application');
  };

  render() {
    
    return (
      <div>
       <h1>Hello From app </h1>
       <button onClick={this.activateModal} className="close-btn">
            Close
        </button>
          <Modal 
          activateModal={this.state.modalActive}
          onExit={this.deactivateModal}
          deactivateModal="#deactivate-modal"
          getApplicationNode={this.getApplicationNode}
          initialFocus={}
          >
          <h1>I am modal</h1>
            <h1>I am modal</h1>
              <h1>I am modal</h1>
                <h1>I am modal</h1>
          <button onClick={this.deactivateModal} className="close-btn" id="deactivate-modal">
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

export default App;
