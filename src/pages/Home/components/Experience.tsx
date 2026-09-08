import { motion, useReducedMotion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";

export default function Experience() {
  const reduce = useReducedMotion();

  const experienceItems = [
    {
      id: 1,
      company: "Dubsado",
      position: "Product Manager",
      period: "2023 - Present",
      current: true,
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
      period: "2021 - 2023",
      current: false,
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
      current: false,
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
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-14">
          Experience
        </h2>

        <div className="divide-y divide-border">
          {experienceItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-8 first:pt-0 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-3 sm:gap-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.position}
                </h3>
                <p className="text-primary font-medium">{item.company}</p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div>
                <ul className="space-y-2">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-border"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    {item.link.text}
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
