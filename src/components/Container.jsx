import { Home } from "../components/Home";
import { Route, Switch } from "react-router-dom";
import { SobreMi } from "./SobreMi";
import { Portafolio } from "./portafolio/Portafolio";
import { Blog } from "./Blog";
import { Contacto } from "./Contacto";

export const Container = () => {
  return (
    <div className="fs-container">
      <Switch>
        <Route path="/sobremi">
          <SobreMi />
        </Route>
        <Route path="/portafolio">
          <Portafolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
