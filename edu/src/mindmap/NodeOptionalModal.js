// NodeOptionsModal.js
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the app element for accessibility

const NodeOptionsModal = ({ isOpen, onRequestClose, nodeName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Node Options"
    >
      <h2>{nodeName}</h2>
      <button onClick={() => alert("Quiz for " + nodeName)}>Take Quiz</button>
      <button onClick={() => alert("Flashcards for " + nodeName)}>
        View Flashcards
      </button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default NodeOptionsModal;
