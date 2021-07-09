import { NATURALEZA_1, NATURALEZA_2 } from "../../images/images";
import { Image } from "../Image";
import { Box } from "./Box";

export const Naturaleza = () => {
  return (
    <div className="fs-bnw">
      <Image url={NATURALEZA_1} alt="Naturaleza foto 1" />
      <Image url={NATURALEZA_2} alt="Naturaleza foto 2" />
      <Box
        title="Naturaleza"
        text="La fotografía de naturaleza es una modalidad del amplio tema fotográfico que trata de enmarcar en el papel la grandiosidad de los paisajes, la fauna, la flora y los pequeños detalles."
        color={1}
      />
    </div>
  );
};
