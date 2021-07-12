import React, {Component} from "react";
import Modal from "./components/Modal/Modal";

import './App.css';

class App extends Component {
 constructor(props) {
    super(props);

    this.state = {
      open: false
    };

  }

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  getApplicationNode = () => {
    return document.getElementById('application');
  };



  render() {
    const modal = this.state.open
      ? <Modal
          titleText="demo one"
          initialFocus="#demo-one-deactivate"
          getApplicationNode={this.getApplicationNode}
          backdropStyle={{ paddingTop: '2em' }}
          includeDefaultStyles="true"
      
        >
          <div id="demo-one-modal" className="modal">
            <div >
              <p>
                This is an accessable modal
                {' '}
                <a href="/">has</a>
                {' '}
                <a href="/">some</a>
                {' '}
                <a href="/">focusable</a>
                {' '}
                <a href="/">content</a>
                {' '}
                
              </p>
              <input type="text"></input>
            </div>
            <footer style={{marginTop: "20px"}}>
              <button id="demo-one-deactivate" onClick={this.closeModal}>
                 close modal
              </button>
            </footer>
          </div>
        </Modal>
      : false;

    return (
      <div>
        <button onClick={this.openModal}>
           Open modal 
        </button>
        {modal}
      </div>
    );
  }
}

export default App;
