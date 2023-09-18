import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { Error404 } from "./pages/Error404.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
    <>
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
