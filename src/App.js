import React from "react";
import {Modal, ModalDialog} from "./components/Modal";
import './App.css';

function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="App">
     <h1>React Modal</h1>
     <h1 style={{color: "red"}}>Project is Under development!!):</h1>
     <button onClick={openModal}>Open Modal</button>
     <button onClick={closeModal}>Close Modal</button>
     <Modal
     isOpen={modalIsOpen}
     >
       <h4>Hello</h4>
       <h2>Dialog</h2>
     </Modal>
     <ModalDialog></ModalDialog>
    </div>
  );
}

export default App;
