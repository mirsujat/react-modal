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
    return document.getElementById('application');
  };

  render() {
    const modal = this.state.modalActive
      ? <Modal
          titleText="demo one"
          onExit={this.deactivateModal}
          initialFocus="#demo-one-deactivate"
          getApplicationNode={this.getApplicationNode}
          backdropStyle={{ paddingTop: '2em' }}
          includeDefaultStyles="true"
          focusDialog="true"
          
          
        >
          <div id="demo-one-modal" className="modal">
            <div className="modal-body">
              <p>
                Here is a modal
                {' '}
                <a href="/">with</a>
                {' '}
                <a href="/">some</a>
                {' '}
                <a href="/">focusable</a>
                {' '}
                parts.
              </p>
              <input type="text"></input>
              <p>
                me too
              </p>
        
            </div>
            <footer className="modal-footer">
              <button id="demo-one-deactivate" onClick={this.deactivateModal}>
                deactivate modal
              </button>
            </footer>
          </div>
        </Modal>
      : false;

    return (
      <div>
        <button onClick={this.activateModal}>
          activate modal
        </button>
        {modal}
      </div>
    );
  }
}

export default App;
