import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const socials = [
  {
    href: "https://www.linkedin.com/in/matthew-moreno-76b58880/",
    icon: BsLinkedin,
    label: "LinkedIn Profile",
  },
  { href: "https://github.com/matt-moreno", icon: BsGithub, label: "GitHub Profile" },
  {
    href: "https://www.instagram.com/matt_moreno64/",
    icon: BsInstagram,
    label: "Instagram Profile",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          href="mailto:morenomatthew83@gmail.com"
        >
          morenomatthew83@gmail.com
        </a>

        <div className="flex gap-1">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors p-2.5 rounded-full"
              aria-label={label}
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
