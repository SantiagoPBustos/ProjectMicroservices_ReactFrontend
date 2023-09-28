import { useNavigate } from "react-router-dom";

export function AuthRegister() {
  const nav = useNavigate();

  const handleSubmit = () => {
    nav("/Register")
  };

  return (
    <button onClick={handleSubmit} className="btn-login">
      Registrarse
    </button>
  );
}

export default AuthRegister;
