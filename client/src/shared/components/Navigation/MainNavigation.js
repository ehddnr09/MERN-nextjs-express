import React, { useState } from "react";
import Link from "next/link";
import DrawerPortal from "../../../hoc/DrawerPortal";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";
import BackDropPortal from "../../../hoc/BackDropPortal";
import Backdrop from "../UlElements/BackDrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      <BackDropPortal>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      </BackDropPortal>
      <DrawerPortal>
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
          <nav className={classes.mainNavigation__drawerNAv}>
            <NavLinks />
          </nav>
        </SideDrawer>
      </DrawerPortal>
      <MainHeader>
        <button
          className={classes.mainNavigation__menuBtn}
          onClick={openDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes.mainNavigation__title}>
          <Link href="/">Your Places</Link>
        </h1>
        <nav className={classes.mainNavigation__headerNav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
