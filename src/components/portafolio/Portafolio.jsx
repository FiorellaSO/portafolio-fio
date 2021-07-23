import { PORTAFOLIO_PORTADA } from "../../images/images";
import { BlackAndWhite } from "./BlackAndWhite";
import { Title } from "../Title";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Naturaleza } from "./Naturaleza";
import { Lugares } from "./Lugares";
import { Revistas } from "./Revistas";
import { Flyers } from "./Flyers";
import { Prototipos } from "./Prototipos";

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

      <div className="fs-portafolio__links">
        <Link to={`${path}/revistas`} className="fs-portafolio__link">
          Revistas
        </Link>
        <Link to={`${path}/flyers`} className="fs-portafolio__link">
          Flyers
        </Link>
        <Link to={`${path}/prototipos`} className="fs-portafolio__link">
          Prototipos
        </Link>
      </div>

      <Switch>
        <Route component={Revistas} path={`${path}/revistas`} />
        <Route component={Flyers} path={`${path}/flyers`} />
        <Route component={Prototipos} path={`${path}/prototipos`} />
      </Switch>
    </div>
  );
};
