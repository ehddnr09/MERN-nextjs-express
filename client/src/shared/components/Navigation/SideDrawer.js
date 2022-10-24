import { CSSTransition } from "react-transition-group";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.sideDrawer} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
