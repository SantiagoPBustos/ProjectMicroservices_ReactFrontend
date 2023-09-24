import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/localstorage";

const ProtectedRoutes = () => {
  let token = getToken();
  if (!(token !== null && token !== undefined)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
