import React from "react";
import Image from "next/image";

import classes from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div className={`${classes.avatar} ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default Avatar;
