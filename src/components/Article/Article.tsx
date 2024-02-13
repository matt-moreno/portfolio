import "./Article.css";

interface CardTypes {
  title: string;
  image?: string;
  link?: string;
  description?: string;
  tag?: string;
}

export default function Article({
  title,
  image,
  link,
  description,
  tag,
}: CardTypes) {
  return (
    <article className="article-container">
      <img src={image} />
      <div className="article-content">
        <a href={link} target="_blank">
          <h3>{title}</h3>
        </a>
        {/* MAKE TAG CONDITIONAL???? */}
        <span>{tag}</span>
        <p>{description}</p>
      </div>
    </article>
  );
}
