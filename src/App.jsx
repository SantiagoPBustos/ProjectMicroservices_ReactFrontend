import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { Error404 } from "./pages/Error404.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        
          <Route path="/User_Log_In" element={<Navigate to={"/Home"}/>} />

          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
