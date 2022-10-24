import { CSSTransition } from "react-transition-group";

import ModalPortal from "../../../hoc/ModalPortal";
import BackDrop from "./BackDrop";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <ModalPortal>
      <div
        className={`${classes.modal} ${props.className}`}
        style={props.style}
      >
        <header className={`${classes.modal__header} ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          }
        >
          <div className={`${classes.modal__content} ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`${classes.modal__footer} ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      </div>
    </ModalPortal>
  );
};

const Modal = (props) => {
  return (
    <>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        timeout={500}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
