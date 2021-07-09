import { CONTACTO_PORTADA } from "../images/images";

export const Contacto = () => {
  return (
    <div className="fs-contacto-container">
      
      <div
        className="fs-contacto__portada"
        style={{ backgroundImage: `url(${CONTACTO_PORTADA})` }}
      >
        <h2 className="fs-contacto__portada_txt">CONTÁCTAME</h2>
      </div>

      <div className="fs-contacto__pregunta">
        <p className="fs-contacto__pregunta_txt">¿Te pareció interesante?</p>
        <button className="fs-contacto__pregunta_btn">sí</button>
        <button className="fs-contacto__pregunta_btn">no</button>
      </div>
      <div className="fs-contacto__datos">
        <div className="fs-contacto__datos_item">
          <img src="/assets/ubicacion.png" alt="ubicacion" />
          <p>Calle la Malva 195, Surco.</p>
        </div>
        <div className="fs-contacto__datos_item">
          <img src="/assets/phone.png" alt="phone" />
          <p>+51 994243571</p>
        </div>
      </div>
      <form className="fs-form">
        <div className="fs-form_inputs">
          <input type="text" placeholder="Nombres" className="fs-form_input" />
          <input
            type="text"
            placeholder="Apellidos"
            className="fs-form_input"
          />
        </div>
        <div className="fs-form_inputs">
          <input
            type="text"
            placeholder="Nº celular"
            className="fs-form_input"
          />
          <input
            type="text"
            placeholder="Correo electrónico"
            className="fs-form_input"
          />
        </div>
        <input
          type="text"
          className="fs-form_input__msg"
          placeholder="Mensaje"
        />
        <button className="fs-form_btn" type="button">
          Enviar
        </button>
      </form>
    </div>
  );
};
