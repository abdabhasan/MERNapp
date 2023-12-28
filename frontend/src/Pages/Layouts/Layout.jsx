import { Outlet } from "react-router-dom";
import { Footer } from "../../Components";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
