import {
  BLOG_PORTADA,
  COMUNICAR_NO_DECORAR,
  DISPARA_RAW,
  FLASH_EXTERIOR,
  REGLA_TERCIOS,
  TEN_UN_CONCEPTO,
  UNICO_LENGUAJE,
} from "../images/images";
import { BlogCard } from "./BlogCard";
import { Title } from "./Title";

export const Blog = () => {
  return (
    <div>
      <div
        className="fs-blog__portada"
        style={{ backgroundImage: `url(${BLOG_PORTADA})` }}
      >
        <h2 className="fs-blog__portada_txt">BLOG</h2>
      </div>

      <Title msg="Consejos para una buena Fotografía" />

      <div className="fs-blog__consejosfoto">
        <BlogCard
          img={REGLA_TERCIOS}
          title="Regla de los 3 tercios"
          text="Consiste en dividir la imagen, mentalmente, en 9 partes iguales (mediante 2 líneas paralelas horizontales y otras 2 verticales) y, a continuación, colocar el sujeto en algún punto de intersección de las líneas."
        />

        <BlogCard
          img={DISPARA_RAW}
          title="Dispara en Raw"
          text="Permite, habiendo capturado una foto correcta desde el principio, que puedas lograr en el revelado una mucho mejor. Realizar una foto en JPG produce una foto final en la que no tendríamos que modificar."
        />

        <BlogCard
          img={FLASH_EXTERIOR}
          title="Flash en el exterior"
          text="Para retiliza el flash en el exterior. el flash ayuda a prevenir las zonas de sombra que ocupan la cara de la persona por llevar algo que proyecte sombra o porque el sol esté encima o detrás de la persona fotografiada."
        />
      </div>

      <Title msg="Consejos para un buen Diseño" />

      <div className="fs-blog__consejosdiseno">
        <BlogCard
          img={TEN_UN_CONCEPTO}
          title="Ten un concepto"
          text="Diseñar sin concepto es como pretender atravesar un desierto sin una brújula: seguro que te pierdes. Por eso, es fundamental tener muy claro qué quieres decir y cómo vas a hacerlo."
          bgdark="true"
        />

        <BlogCard
          img={COMUNICAR_NO_DECORAR}
          title="«Comunicar, no decorar»"
          text="Nuestro objetivo no es la pieza gráfica en sí misma, sino la respuesta que obtendremos gracias a ella de nuestro público objetivo. Esto no significa que no deba ser estéticamente buena, todo lo contrario."
          bgdark="true"
        />

        <BlogCard
          img={UNICO_LENGUAJE}
          title="«Un único lenguaje visual»"
          text="Hay que ser coherentes, especialmente en lo que a identidad visual corporativa se parece. Todas las piezas gráficas deben ser como hermanas: con la misma esencia."
          bgdark="true"
        />
      </div>
    </div>
  );
};
