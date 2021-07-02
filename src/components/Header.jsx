import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Fiorella Santamaria</h1>
      <ul className="menu_list">
        <li>
          <Link to="/" className="menu_list__item">
            <img
              src="assets/home.png"
              alt="home icon"
              className="menu_list__item__img"
            />
            <p className="menu_list__item__txt">Inicio</p>
          </Link>
        </li>
        <li>
          <Link to="/sobremi" className="menu_list__item">
            <img
              src="assets/sobremi.png"
              alt="sobremi icon"
              className="menu_list__item__img"
            />
            <p className="menu_list__item__txt">Sobre mi</p>
          </Link>
        </li>
        <li>
          <Link to="/portafolio" className="menu_list__item">
            <img
              src="assets/portafolio.png"
              alt="portafolio icon"
              className="menu_list__item__img"
            />
            <p className="menu_list__item__txt"> Portafolio</p>
          </Link>
        </li>
        <li>
          <Link to="/blog" className="menu_list__item">
            <img
              src="assets/blog.png"
              alt="blog icon"
              className="menu_list__item__img"
            />
            <p className="menu_list__item__txt"> Blog</p>{" "}
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="menu_list__item">
            <img
              src="assets/contacto.png"
              alt="contacto icon"
              className="menu_list__item__img"
            />
            <p className="menu_list__item__txt"> Contactame</p>{" "}
          </Link>
        </li>
      </ul>
    </header>
  );
};
