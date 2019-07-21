import React from "react";

const Modal = ({ active, title, closeModal, children }) => {
  if (!active) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button onClick={closeModal} className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">{children || null}</section>
        <footer className="modal-card-foot">
          <button onClick={closeModal} className="button">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
