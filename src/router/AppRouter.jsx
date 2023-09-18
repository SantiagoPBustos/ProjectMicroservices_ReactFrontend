import { Routes, Route } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Navbar from "../NavBar";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default AppRouter;
