import React from "react";
import Link from "next/link";

// import './Button.css';

const Button = ({ ...props }) => {
  if (props.to) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        href={props.to}
      >
        {props.children}
      </a>
    );
  }
  if (props.href) {
    return (
      <Link href={props.href} exact={props.exact}>
        <a
          className={`button button--${props.size || "default"} ${
            props.inverse && "button--inverse"
          } ${props.danger && "button--danger"}`}
        >
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
