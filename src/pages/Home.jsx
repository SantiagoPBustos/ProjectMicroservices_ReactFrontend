import { useNavigate } from "react-router-dom";
import { getUser, removeToken, removeUser } from "../utils/localstorage";

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    removeToken();
    removeUser();
    navigate("/");
  };

  return (
    <div className="contenedor">
      <h1>Bienvenido {getUser()} estas logeado</h1>
      <button className="buttonLogout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
