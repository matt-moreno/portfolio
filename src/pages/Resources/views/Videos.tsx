import Article from "@/components/Article/Article";
import { videoData } from "../constants";

export default function Videos() {
  return videoData.map((data, index) => {
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
