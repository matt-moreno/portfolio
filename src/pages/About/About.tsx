import { motion, useReducedMotion } from "motion/react";

export default function About() {
  const reduce = useReducedMotion();

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with React, TypeScript, and cutting-edge technologies.",
    },
    {
      title: "Product Strategy",
      description:
        "Bridging the gap between user needs and technical implementation through data-driven decisions.",
    },
    {
      title: "Data Analytics",
      description:
        "Transforming raw data into actionable insights to drive product innovation and growth.",
    },
    {
      title: "User Experience",
      description:
        "Designing intuitive interfaces that prioritize user needs and create meaningful interactions.",
    },
    {
      title: "Team Leadership",
      description:
        "Leading cross-functional teams to deliver exceptional products that exceed user expectations.",
    },
    {
      title: "Innovation",
      description:
        "Constantly exploring new technologies and methodologies to push the boundaries of what's possible.",
    },
  ];

  return (
    <div className="min-h-[100dvh] flex items-center px-6 md:px-12 lg:px-16 py-6 md:py-8">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-5">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-56 sm:w-64 lg:w-full mx-auto lg:mx-0"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-border">
              <img
                src="/assets/MattPortrait.jpeg"
                alt="Matt Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-5 md:space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Hey there! I'm Matt, a Southern California native, marathon
              runner, and tech enthusiast with a passion for building great
              products. I currently work as a Product Manager at Dubsado,
              where I've grown from Customer Success to leading
              cross-functional initiatives, including the full redesign of
              our platform. I'm also pursuing a Master's in Management
              Information Systems at the University of Arizona, continuously
              leveling up through hands-on learning and group projects. My
              background blends frontend development, data analytics, and
              product strategy, and I'm especially interested in solving
              complex problems at the intersection of UX and business
              operations. Outside of work, I'm usually out on a run, catching
              up on tech trends, or planning my next trip.
            </p>

            <div>
              <h2 className="text-lg font-bold tracking-tight text-foreground mb-3">
                Skills &amp; Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.title}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-card p-3.5"
                  >
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
