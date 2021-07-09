export const Image = (props) => {
  const { url, alt } = props;

  return <img src={url} alt={alt} className="fs-image" />;
};
