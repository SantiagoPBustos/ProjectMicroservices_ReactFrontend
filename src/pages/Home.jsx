import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export function Home() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="contenedor">
      <h1>Bienvenido {localStorage.getItem("username")} estas logeado</h1>
      <button className="buttonLogout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
