import Article from "../../../components/Article/Article";
import { websiteData } from "../constants";

export default function Websites() {
  return websiteData.map((data, index) => {
    const { title, image, link, description, tag } = data;
    return (
      <Article
        key={index}
        title={title}
        image={image}
        link={link}
        description={description}
        tag={tag}
      />
    );
  });
}
