import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../Components";

const HomeLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
