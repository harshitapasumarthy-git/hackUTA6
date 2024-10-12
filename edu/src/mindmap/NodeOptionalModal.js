import React from "react";
import Modal from "react-modal";

const NodeOptionsModal = ({ isOpen, onRequestClose, nodeName }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Options for {nodeName}</h2>
      {/* Add your modal content here */}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default NodeOptionsModal;
