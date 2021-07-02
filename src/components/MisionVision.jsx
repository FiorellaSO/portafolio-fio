export const MisionVision = ({ title, msg }) => {
  return (
    <div className="mision-vision__item">
      <h5 className="mision-vision__title">{title}</h5>
      <p className="mision-vision__text">{msg}</p>
    </div>
  );
};
