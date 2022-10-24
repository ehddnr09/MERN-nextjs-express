import React, { useRef, useEffect } from "react";
// import GoogleMapReact from "google-map-react";

import classes from "./Map.module.css";

const Map = ({ ...props }) => {
  const mapRef = useRef();
  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const { center, zoom } = props;
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`${classes.map} ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
