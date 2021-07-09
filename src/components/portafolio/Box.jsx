export const Box = (props) => {
  const { title, text, color = 0 } = props;

  return (
    <div
      className={`fs-box ${
        color === 0
          ? "fs-box__bg_pri"
          : color === 1
          ? "fs-box__bg_sec"
          : "fs-box__bg_ter"
      }`}
    >
      <h3 className="fs-box__title">{title}</h3>
      <p className="fs-box__txt">{text}</p>
    </div>
  );
};
