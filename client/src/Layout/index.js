import MainNavigation from "../shared/components/Navigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
