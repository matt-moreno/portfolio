import Article from "@/components/Article/Article";
import { bookData } from "../constants";

export default function Books() {
  return bookData.map((data, index) => {
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
