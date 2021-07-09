export const BlogCard = (props) => {
  const { img, title, text, bgdark = false } = props;
  return (
    <div className={`fs-blogcard ${bgdark && " fs-blogcard__bgdark"}`}>
      <img src={img} alt={title} className="fs-blogcard__img" />
      <h3 className="fs-blogcard__title">{title}</h3>
      <p className="fs-blogcard__txt">{text}</p>
    </div>
  );
};
