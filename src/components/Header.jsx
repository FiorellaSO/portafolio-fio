import { Link } from "react-router-dom";
import { HOME, SOBRE_MI, PORTAFOLIO, BLOG, CONTACTO } from "../images/images";

export const Header = () => {
  return (
    <header className="fs-header">
      <h1 className="fs-header__logo">Fiorella Santamaria</h1>
      <ul className="fs-menu_list">
        <li>
          <Link to="/" className="fs-menu_list__item">
            <img
              src={HOME}
              alt="home icon"
              className="fs-menu_list__item__img"
            />
            <p className="fs-menu_list__item__txt">Inicio</p>
          </Link>
        </li>
        <li>
          <Link to="/sobremi" className="fs-menu_list__item">
            <img
              src={SOBRE_MI}
              alt="sobremi icon"
              className="fs-menu_list__item__img"
            />
            <p className="fs-menu_list__item__txt">Sobre mi</p>
          </Link>
        </li>
        <li>
          <Link to="/portafolio" className="fs-menu_list__item">
            <img
              src={PORTAFOLIO}
              alt="portafolio icon"
              className="fs-menu_list__item__img"
            />
            <p className="fs-menu_list__item__txt"> Portafolio</p>
          </Link>
        </li>
        <li>
          <Link to="/blog" className="fs-menu_list__item">
            <img
              src={BLOG}
              alt="blog icon"
              className="fs-menu_list__item__img"
            />
            <p className="fs-menu_list__item__txt"> Blog</p>{" "}
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="fs-menu_list__item">
            <img
              src={CONTACTO}
              alt="contacto icon"
              className="fs-menu_list__item__img"
            />
            <p className="fs-menu_list__item__txt"> Contactame</p>{" "}
          </Link>
        </li>
      </ul>
    </header>
  );
};
