import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HOME_PORTADA, SLIDER_1, SLIDER_2, SLIDER_3 } from "../images/images";

export const Slider = () => {
  return (
    <div className="fs-slider">
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          type: "loop",
          pauseOnHover: false,
        }}
        hasSliderWrapper
        hasAutoplayProgress
      >
        <SplideSlide>
          <div
            className="fs-home_portada"
            style={{ backgroundImage: `url(${HOME_PORTADA})` }}
          >
            <h2 className="fs-home_portada__frase">
              “La fotografía no puede cambiar la realidad pero si mostrarla”
            </h2>
            <h3 className="fs-home_portada__firma">Fred Mc.Cullin</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="fs-home_portada"
            style={{ backgroundImage: `url(${SLIDER_1})` }}
          >
            <h2 className="fs-home_portada__frase">
              “La fotografía no puede cambiar la realidad pero si mostrarla”
            </h2>
            <h3 className="fs-home_portada__firma">Fred Mc.Cullin</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="fs-home_portada"
            style={{ backgroundImage: `url(${SLIDER_2})` }}
          >
            <h2 className="fs-home_portada__frase">
              “La fotografía no puede cambiar la realidad pero si mostrarla”
            </h2>
            <h3 className="fs-home_portada__firma">Fred Mc.Cullin</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="fs-home_portada"
            style={{ backgroundImage: `url(${SLIDER_3})` }}
          >
            <h2 className="fs-home_portada__frase">
              “La fotografía no puede cambiar la realidad pero si mostrarla”
            </h2>
            <h3 className="fs-home_portada__firma">Fred Mc.Cullin</h3>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
