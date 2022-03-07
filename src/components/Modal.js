import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__title">
          <h2>{props.title}</h2>
        </div>
        <div className="modal__content">
            {props.children}
        </div>
        <div className="modal__actions">    
        </div>
      </div>
    </>
  );
};

export default Modal;
