import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SidebarTypes } from "../../../layouts/MainLayout";

export default function Profile({ toggleSidebar }: SidebarTypes) {
  return (
    <div className="flex flex-col items-center pt-10 px-6">
      <Link to="/" onClick={toggleSidebar} className="mb-5 group">
        <img
          className="w-28 h-28 rounded-full object-cover ring-1 ring-border transition-all group-hover:ring-primary/50"
          src="/assets/matt-profile.jpg"
          alt="Matt Moreno Profile"
        />
      </Link>

      <h2 className="text-lg font-semibold text-foreground mb-5 text-center">
        Matt Moreno
      </h2>

      <div className="flex gap-2 mb-8">
        <Link
          to="https://www.linkedin.com/in/matthew-moreno-76b58880/"
          target="_blank"
          className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors p-2.5 rounded-full"
          aria-label="LinkedIn Profile"
        >
          <BsLinkedin className="text-lg" />
        </Link>
        <Link
          to="https://github.com/matt-moreno"
          target="_blank"
          className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors p-2.5 rounded-full"
          aria-label="GitHub Profile"
        >
          <BsGithub className="text-lg" />
        </Link>
        <Link
          to="https://www.instagram.com/matt_moreno64/"
          target="_blank"
          className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors p-2.5 rounded-full"
          aria-label="Instagram Profile"
        >
          <BsInstagram className="text-lg" />
        </Link>
      </div>
    </div>
  );
}
