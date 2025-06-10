export default function Experience() {
  const experienceItems = [
    {
      id: 1,
      company: "Dubsado",
      position: "Product Manager",
      period: "2024 - Present",
      type: "current",
      responsibilities: [
        "Lead product strategy and roadmap development for core business features",
        "Collaborate with cross-functional teams to drive product innovation and growth",
        "Analyze market trends and user feedback to identify new opportunities",
        "Manage product lifecycle from conception to launch and optimization",
      ],
    },
    {
      id: 2,
      company: "Dubsado",
      position: "Product Owner",
      period: "2021 - 2024",
      type: "previous",
      responsibilities: [
        "Own the product roadmap for the Form Builder feature",
        "Identify and address potential issues within and between separate development teams",
        "Champion the needs and expectations of users throughout the development process, ensuring that the final product aligns with user requirements and preferences",
        "Actively seek opportunities to enhance development processes, efficiency, and product quality based on ongoing feedback, retrospectives, and industry best practices",
        "Establish and maintain a feedback loop with customers, collecting insights, and incorporating user feedback into the product development cycle",
      ],
      link: {
        url: "https://www.youtube.com/live/PHiIgowpqy8?si=DcvvnJVOtZEnsQIE",
        text: "View Form Builder Demo",
      },
    },
    {
      id: 3,
      company: "Dubsado",
      position: "Customer Success",
      period: "2020 - 2021",
      type: "previous",
      responsibilities: [
        "Simultaneously managed multiple customer questions, complaints, and concerns until a satisfactory resolution has been facilitated",
        "Provided technical knowledge and high-quality communication to solve customer issues",
        "Demonstrated pragmatic solutions to resolve complex business workflow problems",
        "Translated customer usage and feedback into actionable insights and feature ideas",
        "Engaged with customers to understand their goals, challenges, and product requirements",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z"
              />
            </svg>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Experience
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and career progression
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"></div>

          <div className="space-y-8">
            {experienceItems.map((item) => (
              <div key={item.id} className="relative flex items-start">
                {/* Timeline marker */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                    item.type === "current"
                      ? "bg-blue-600 border-blue-200 shadow-lg shadow-blue-500/30"
                      : "bg-white border-blue-300 shadow-md"
                  }`}
                >
                  {item.type === "current" ? (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="ml-8 flex-1">
                  <div
                    className={`rounded-xl shadow-lg border p-6 transition-all duration-300 hover:shadow-xl ${
                      item.type === "current"
                        ? "bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-blue-500/10"
                        : "bg-white border-gray-200 hover:shadow-gray-500/10"
                    }`}
                  >
                    {/* Current role indicator */}
                    {item.type === "current" && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                          Current Position
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600">
                          {item.company}
                        </h4>
                      </div>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          item.type === "current"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h5 className="font-medium text-gray-900 mb-2">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Link if available */}
                      {item.link && (
                        <div className="pt-3 border-t border-gray-100">
                          <a
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
                          >
                            {item.link.text}
                            <svg
                              className="h-3 w-3 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
