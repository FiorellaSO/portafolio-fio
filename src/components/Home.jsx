import { MisionVision } from "./MisionVision";

export const Home = () => {
  return (
    <div>
      <div
        className="home_portada"
        style={{ backgroundImage: `url("/assets/homeportada.png")` }}
      >
        <h2 className="home_portada__frase">
          “La fotografía no puede cambiar la realidad pero si mostrarla”
        </h2>
        <h3 className="home_portada__firma">Fred Mc.Cullin</h3>
      </div>
      <h3 className="home_title">¡ Bienvenidos a mi sitio Web !</h3>

      <div className="mision-vision">
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
