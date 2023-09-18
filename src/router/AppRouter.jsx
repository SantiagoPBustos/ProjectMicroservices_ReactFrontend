import { Routes, Route, Navigate } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Navbar from "../NavBar";

export function AppRouter() {
  return (
    <>
      <Routes>        
        <Route index element={<Login />} />
        <Route path="" element={<Login />} />
        <Route path="/" element={<Login />} />
        {localStorage.getItem("token") !== null ? (
          <Route path="/Home" element={<Home />} />
        ) : (
          <Route path="/Home" element={<Navigate to="/" />} />
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default AppRouter;
