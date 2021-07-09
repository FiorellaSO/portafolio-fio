import { LUGAR_1, LUGAR_2 } from "../../images/images";
import { Image } from "../Image";
import { Box } from "./Box";

export const Lugares = () => {
  return (
    <div className="fs-bnw">
      <Box
        title="Lugares"
        text="En el mundo de los viajes, las redes sociales suponen una importante fuente de inspiración.Ahora, a nuestras amistades y familia, les enviamos varias fotos, les contamos planes, audios o vídeos de nuestros viajes."
        color={2}
      />
      <Image url={LUGAR_1} alt="lugar foto 1" />
      <Image url={LUGAR_2} alt="lugar foto 2" />
    </div>
  );
};
