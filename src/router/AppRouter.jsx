import { Routes, Route, Navigate } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  const token = localStorage.getItem("token");
  
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="" element={<Login />} />
      <Route path="/" element={<Login />} />
      {token !== null && token !== undefined ? (
        <Route path="/Home" element={<Home />} />
      ) : (
        <Route path="/Home" element={<Navigate to="/" />} />
      )}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
