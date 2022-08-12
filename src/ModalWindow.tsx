import React from "react";

interface props {
  tittle: string;
  body: string;
  firstButton: string;
  secondButton: string;
  onClickFirstButton: () => void;
  onclickSecondButton: () => void;
}

const Modal: React.FC<props> = ({
  tittle,
  body,
  firstButton,
  secondButton,
  onClickFirstButton,
  onclickSecondButton,
}) => {
  return (
    <div
      onClick={() => {
        onClickFirstButton();
      }}
      className="modal"
      style={{ display: "block" }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{tittle}</h5>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                onClickFirstButton();
              }}
              type="button"
              className="btn btn-primary"
            >
              {firstButton}
            </button>
            <button
              onClick={() => {
                onclickSecondButton();
              }}
              type="button"
              className="btn btn-danger"
            >
              {secondButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
