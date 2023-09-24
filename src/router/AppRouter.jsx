import { Routes, Route } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Home" element={<Home />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
