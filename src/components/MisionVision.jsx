export const MisionVision = ({ title, msg }) => {
  return (
    <div className="fs-mision-vision__item">
      <h5 className="fs-mision-vision__title">{title}</h5>
      <p className="fs-mision-vision__text">{msg}</p>
    </div>
  );
};
