import {
  SOBREMI_FOTO,
  SOBREMI_HABILIDADES,
  SOBREMI_PORTADA,
} from "../images/images";
import { Image } from "./Image";
import { Title } from "./Title";

export const SobreMi = () => {
  return (
    <div>
      <div
        className="fs-sobremi-portada"
        style={{ backgroundImage: `url(${SOBREMI_PORTADA})` }}
      >
        <h2 className="fs-sobremi-portada__txt">SOBRE MI</h2>
      </div>
      <Title msg="Conóceme" />
      <div className="fs-sobremi__datos">
        <ul className="fs-sobremi__datos_list">
          <li>Nombre: Evelyn Fiorella Santamaria Ocampo</li>
          <li>Edad: 20 años</li>
          <li>Carrera profesional: Ciencias de la Comunicación - UTP</li>
          <li>Carrera técnica: Diseño Gráfico - Cibertec</li>
          <li>
            Sobre mi: Me gusta mostrar a las personas lo que va más alla de una
            "simple" fotografía y hacerles ver lo que ellos a simple vista no
            pueden. Además, me gusta darle vida y diseñar portadas,revistas,etc.
          </li>
        </ul>
        <Image url={SOBREMI_FOTO} alt="sobremi foto" />
      </div>
      <div className="fs-sobremi__skills">
        <Image url={SOBREMI_HABILIDADES} alt="sobremi habilidades" />
        
        <div className="fs-sobremi__skills_list">
          <p>Habilidades</p>
          <ul>
            <li>Visión y curiosidad.</li>
            <li>Creatividad e imaginación.</li>
            <li>Estilo propio.</li>
            <li>Resolución de problemas.</li>
            <li>
              Dominio tecnológico de programas de Adobe (I llustraitor ,
              Photoshop, After Effects, InDesing, Premiere).
            </li>
            <li>Capacidad para priorizar tareas.</li>
            <li>Capacidad para trabajar en equipo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
