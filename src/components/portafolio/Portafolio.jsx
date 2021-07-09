import { PORTAFOLIO_PORTADA } from "../../images/images";
import { BlackAndWhite } from "./BlackAndWhite";
import { Title } from "../Title";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Naturaleza } from "./Naturaleza";
import { Lugares } from "./Lugares";

export const Portafolio = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <div
        className="fs-portafolio__portada"
        style={{ backgroundImage: `url(${PORTAFOLIO_PORTADA})` }}
      >
        <h2 className="fs-portafolio__portada_txt">PORTAFOLIO</h2>
      </div>

      <Title msg="Fotografías" />

      <div className="fs-portafolio__links">
        <Link to={`${path}/blackandwhite`} className="fs-portafolio__link">
          Black/White
        </Link>
        <Link to={`${path}/naturaleza`} className="fs-portafolio__link">
          Naturaleza
        </Link>
        <Link to={`${path}/lugares`} className="fs-portafolio__link">
          Lugares
        </Link>
      </div>

      <Switch>
        <Route component={BlackAndWhite} path={`${path}/blackandwhite`} />
        <Route component={Naturaleza} path={`${path}/naturaleza`} />
        <Route component={Lugares} path={`${path}/lugares`} />
      </Switch>

      <Title msg="Diseños" />

      <div className="fs-disenos__imgs">
        <img src="/assets/nathansykes.png" alt="nathan sykes" />
        <img src="/assets/globoaerostatico.png" alt="globo aerostatico" />
        <img src="/assets/virtualpro.png" alt="virtual pro" />
      </div>
      {/* 
      <div className="fs-disenos-links">
        <Link to={`${path}/portadas`} className="fs-disenos__link">
          Portadas
        </Link>
        <Link to={`${path}/revistas`} className="fs-disenos__link">
          Revistas
        </Link>
        <Link to={`${path}/afiches`} className="fs-disenos__link">
          Afiches
        </Link>
      </div>

      <Switch>
        <Route component={BlackAndWhite} path={`/${path}/portadas`} />
        <Route component={Naturaleza} path={`/${path}/revistas`} />
        <Route component={Lugares} path={`/${path}/afiches`} />
      </Switch> */}
    </div>
  );
};
