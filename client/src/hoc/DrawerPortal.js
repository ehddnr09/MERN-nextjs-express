import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const DrawerPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#drawer-hook"))
    : null;
};

export default DrawerPortal;
