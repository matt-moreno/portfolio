interface CardTypes {
  title: string;
  image?: string;
  link?: string;
  description?: string;
  tag?: string;
}

// Function to get tag colors based on tag type
const getTagColors = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "design":
      return {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-800 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800",
      };
    case "productivity":
      return {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-800 dark:text-green-300",
        border: "border-green-200 dark:border-green-800",
      };
    case "education":
      return {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-800 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800",
      };
    default:
      return {
        bg: "bg-gray-100 dark:bg-gray-900/30",
        text: "text-gray-800 dark:text-gray-300",
        border: "border-gray-200 dark:border-gray-800",
      };
  }
};

export default function Article({
  title,
  image,
  link,
  description,
  tag,
}: CardTypes) {
  const tagColors = tag ? getTagColors(tag) : null;

  return (
    <article className="flex flex-row mx-6 py-6 border-b border-slate-300 dark:border-slate-700 group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors duration-200 rounded-lg px-4">
      {image && (
        <div className="flex-shrink-0 w-48 h-32 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex-1 pl-4 flex flex-col justify-between">
        <div>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 hover:underline">
                {title}
              </h3>
            </a>
          ) : (
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
              {title}
            </h3>
          )}

          {tag && tagColors && (
            <span
              className={`inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full ${tagColors.bg} ${tagColors.text} ${tagColors.border} border`}
            >
              {tag}
            </span>
          )}

          {description && (
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {link && (
          <div className="mt-3 pt-2">
            <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn more
              <svg
                className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
