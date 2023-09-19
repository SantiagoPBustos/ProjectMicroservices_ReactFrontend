import background from "../assets/bg-404.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Error404.css";

export function Error404() {
  return (
    <div className="principal-container">
      <div className="container">
        <img src={background} alt="" />
        <h1 className="text">
          Oops, parece que estas un poco perdido. ¡Ingresa nuevamente a nuestra
          pagina de inicio!
        </h1>
        <div>
          <a className="btn" href="/">
            Ir a la pagina principal
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error404;
