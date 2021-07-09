import { BLACK_1, BLACK_2 } from "../../images/images";
import { Image } from "../Image";
import { Box } from "./Box";

export const BlackAndWhite = () => {
  return (
    <div className="fs-bnw">
      <Box
        title="Black and White"
        text="La fotografía en blanco y negro, B/N o en inglés B/W (de black and white), es una frase adjetiva utilizada sobre todo en cine y fotografía para describir varias formas de tecnología visual."
      />
      <Image url={BLACK_1} alt="blanco y negro 1" />
      <Image url={BLACK_2} alt="blanco y negro 2" />
    </div>
  );
};
