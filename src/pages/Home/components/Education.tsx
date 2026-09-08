import { motion, useReducedMotion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";

export default function Education() {
  const reduce = useReducedMotion();

  const educationItems = [
    {
      id: 1,
      institution: "University of Arizona",
      program: "Master of Management Information Systems",
      period: "2024 - December 2025",
      image: "/assets/arizona.png",
      imageAlt: "University of Arizona logo",
      type: "Master's Degree",
      inProgress: true,
      description:
        "Earned a Master's in MIS to strengthen my foundation in systems analysis, data-driven decision making, and IT strategy. Focused on real-world applications through team-based projects.",
    },
    {
      id: 2,
      institution: "University of California, Riverside",
      program: "B.A. Political Science Administrative Studies",
      minor: "Management Information Systems",
      period: "September 2016 - June 2020",
      image: "/assets/UCR.seal.png",
      imageAlt: "UCR seal",
      type: "Degree",
      inProgress: false,
      description:
        "Studied Political Science with a focus on Administrative Studies and a minor in MIS. Built an interdisciplinary base combining business, technology, and organizational operations.",
    },
    {
      id: 3,
      institution: "Scrum Alliance",
      program: "Certified Scrum Product Owner",
      period: "Issued: May 8th 2023",
      expires: "Expires: May 8th 2025",
      image: "/assets/CSPO.webp",
      imageAlt: "CSPO badge",
      certificateUrl: "https://bcert.me/sfxwtxody",
      type: "Certification",
      inProgress: false,
      description:
        "Earned certification as a Scrum Product Owner, validating my ability to drive agile product development and manage stakeholder priorities effectively.",
    },
    {
      id: 4,
      institution: "Google Coursera",
      program: "Google Data Analytics Professional Certificate",
      period: "Issued: December 3rd 2023",
      image: "/assets/google-data.png",
      imageAlt: "Google data certificate logo",
      certificateUrl:
        "https://www.credly.com/badges/025029a9-ece9-41e6-beba-8a88a7277501/porfolio",
      type: "Certification",
      inProgress: false,
      description:
        "Completed an online data analytics course covering data analysis, data visualization, and data storytelling. Focused on building better data-driven decisions.",
    },
    {
      id: 5,
      institution: "Scrimba",
      program: "The Frontend Developer Bootcamp",
      period: "Issued: December 3rd 2023",
      image: "/assets/scrimba.png",
      imageAlt: "Scrimba logo",
      certificateUrl: "https://scrimba.com/certificate/uZRRZxHv/gfrontend",
      type: "Certification",
      inProgress: false,
      description:
        "Completed a project-based frontend development bootcamp covering HTML, CSS, JavaScript, React, and version control. Focused on building interactive user interfaces.",
    },
    {
      id: 6,
      institution: "University of California, Irvine",
      program: "Cybersecurity Bootcamp",
      department: "Division of Continuing Education",
      period: "May 2021 - November 2021",
      image: "/assets/UCI.svg.png",
      imageAlt: "UCI seal",
      certificateUrl:
        "https://www.parchment.com/u/award/d65a9b98572dcc7d4471f624b70cc265",
      type: "Bootcamp",
      inProgress: false,
      description:
        "Attended an intensive Cybersecurity bootcamp to gain hands-on experience in network security, ethical hacking, and cybersecurity frameworks.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-14">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className={`rounded-xl border p-6 bg-card ${
                item.inProgress ? "border-primary/40" : "border-border"
              }`}
            >
              {item.inProgress && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Currently Studying
                </span>
              )}

              <div className="flex items-start gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-14 h-14 object-contain rounded-lg bg-white p-1.5 border border-border flex-shrink-0"
                />
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground leading-tight">
                      {item.institution}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground flex-shrink-0">
                      {item.type}
                    </span>
                  </div>
                  {item.department && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {item.department}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground">{item.program}</h4>

                {item.minor && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Minor:</span>{" "}
                    {item.minor}
                  </p>
                )}

                <p
                  className={`text-sm ${
                    item.inProgress
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.period}
                  {item.expires ? ` · ${item.expires}` : ""}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    View Certificate
                    <BsArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
