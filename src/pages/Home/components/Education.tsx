export default function Education() {
  const educationItems = [
    {
      id: 1,
      institution: "University of Arizona",
      program: "Master of Management Information Systems",
      period: "2024 - Present",
      image: "/src/assets/arizona.png",
      imageAlt: "University of Arizona logo",
      type: "Master's Degree",
      inProgress: true,
    },
    {
      id: 2,
      institution: "University of California, Riverside",
      program: "B.A. Political Science Administrative Studies",
      minor: "Management Information Systems",
      period: "September 2016 - June 2020",
      image: "/src/assets/UCR.seal.png",
      imageAlt: "UCR seal",
      type: "Degree",
    },
    {
      id: 3,
      institution: "Scrum Alliance",
      program: "Certified Scrum Product Owner",
      period: "Issued: May 8th 2023",
      expires: "Expires: May 8th 2025",
      image: "/src/assets/CSPO.webp",
      imageAlt: "CSPO badge",
      certificateUrl: "https://bcert.me/sfxwtxody",
      type: "Certification",
    },
    {
      id: 4,
      institution: "Scrimba",
      program: "The Frontend Developer Bootcamp",
      image: "/src/assets/scrimba.png",
      imageAlt: "Scrimba logo",
      certificateUrl: "https://scrimba.com/certificate/uZRRZxHv/gfrontend",
      type: "Bootcamp",
    },
    {
      id: 5,
      institution: "University of California, Irvine",
      program: "Cybersecurity Bootcamp",
      department: "Division of Continuing Education",
      period: "May 2021 - November 2021",
      image: "/src/assets/UCI.svg.png",
      imageAlt: "UCI seal",
      certificateUrl:
        "https://www.parchment.com/u/award/d65a9b98572dcc7d4471f624b70cc265",
      type: "Bootcamp",
    },
  ];

  return (
    <section className="py-16 px-6 w-full bg-gray-900">
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
                d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
              Education
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl shadow-lg border transition-all duration-300 transform hover:-translate-y-1 ${
                item.inProgress
                  ? "bg-gradient-to-br from-blue-900/50 to-gray-800 border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 ring-1 ring-blue-500/30"
                  : "bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50"
              }`}
            >
              <div className="p-6">
                {item.inProgress && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                        Currently Studying
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-sm border border-gray-600"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {item.institution}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                          item.inProgress
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    {item.department && (
                      <p className="text-sm text-gray-400 mb-1">
                        {item.department}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white">{item.program}</h4>

                  {item.minor && (
                    <p className="text-sm text-gray-300">
                      <span className="font-medium">Minor:</span> {item.minor}
                    </p>
                  )}

                  {item.period && (
                    <p
                      className={`text-sm ${
                        item.inProgress
                          ? "text-green-300 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {item.period}
                    </p>
                  )}

                  {item.expires && (
                    <p className="text-sm text-gray-400">{item.expires}</p>
                  )}

                  {item.certificateUrl && (
                    <div className="pt-3">
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        View Certificate
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
          ))}
        </div>
      </div>
    </section>
  );
}
