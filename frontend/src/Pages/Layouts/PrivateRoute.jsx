import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // const { user } = useSelector((store) => store.user);
  const user = true;

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default PrivateRoute;
