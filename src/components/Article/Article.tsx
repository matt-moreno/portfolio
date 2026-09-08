import { BsArrowRight } from "react-icons/bs";

interface CardTypes {
  title: string;
  image?: string;
  link?: string;
  description?: string;
  tag?: string;
}

// Distinct hues per content category so tags stay scannable at a glance.
const getTagColors = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "design":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
    case "productivity":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
    case "education":
      return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300";
    case "fiction":
      return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300";
    case "non-fiction":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300";
    case "self-help":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
    case "motivation":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function Article({
  title,
  image,
  link,
  description,
  tag,
}: CardTypes) {
  const articleContent = (
    <article className="flex gap-5 py-5 border-b border-border group hover:bg-secondary/50 transition-colors rounded-lg px-4 cursor-pointer">
      {image && (
        <div className="flex-shrink-0 w-40 h-28 overflow-hidden rounded-lg border border-border">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {tag && (
              <span
                className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full flex-shrink-0 ${getTagColors(
                  tag
                )}`}
              >
                {tag}
              </span>
            )}
          </div>

          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {link && (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-2">
            Visit link
            <BsArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </article>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {articleContent}
      </a>
    );
  }

  return articleContent;
}
