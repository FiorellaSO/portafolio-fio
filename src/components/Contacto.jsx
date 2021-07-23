import { CONTACTO_PORTADA } from "../images/images";
import { ToastContainer, toast } from "react-toastify";
import { SMARTPHONE, UBICACION } from "../images/images";

const notify = (success) => {
  success
    ? toast.success("Genial! 💯")
    : toast.error("Que nos sugeririas que mejoremos? 🤔");
};

export const Contacto = () => {
  return (
    <div className="fs-contacto-container">
      <ToastContainer  />
      <div
        className="fs-contacto__portada"
        style={{ backgroundImage: `url(${CONTACTO_PORTADA})` }}
      >
        <h2 className="fs-contacto__portada_txt">CONTÁCTAME</h2>
      </div>
      <div className="fs-contacto__pregunta">
        <p className="fs-contacto__pregunta_txt">¿Te pareció interesante?</p>
        <button
          className="fs-contacto__pregunta_btn"
          onClick={() => {
            notify(true);
          }}
        >
          sí
        </button>
        <button
          className="fs-contacto__pregunta_btn"
          onClick={() => {
            notify(false);
          }}
        >
          no
        </button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.129252130631!2d-76.96829608468705!3d-12.103302946251372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c74f187f291d%3A0x6e35173588cd661!2sLa%20Malva%20195%2C%20Cercado%20de%20Lima%2015023!5e0!3m2!1ses!2spe!4v1626394434303!5m2!1ses!2spe"
        allowfullscreen=""
        title="asdasdasd"
        loading="lazy"
        className="fs-map"
      ></iframe>
      <div className="fs-contacto__datos">
        <div className="fs-contacto__datos_item">
          <img src={UBICACION} alt="ubicacion" />
          <p>Calle la Malva 195, Surco.</p>
        </div>
        <div className="fs-contacto__datos_item">
          <img src={SMARTPHONE} alt="phone" />
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
