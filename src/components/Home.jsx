import { MisionVision } from "./MisionVision";
import { Title } from "./Title";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div>
      <Slider />

      <Title msg="¡ Bienvenidos a mi sitio Web !" />

      <div className="fs-mision-vision">
        <MisionVision
          title="Misión"
          msg="Informar y demostrar mis habilidades tanto en fotografía como en diseño.
Mostrar mi portafolio y como ubicarme."
        />
        <MisionVision
          title="Visión"
          msg="Que el público me conozca mejor a traves de mi portafolio y quiera hacer negocios conmigo."
        />
      </div>
    </div>
  );
};
