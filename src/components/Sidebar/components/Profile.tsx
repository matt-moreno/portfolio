import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SidebarTypes } from "../../../layouts/MainLayout";

export default function Profile({ toggleSidebar }: SidebarTypes) {
  return (
    <div className="flex flex-col items-center pt-8 px-6">
      {/* Profile Photo */}
      <Link to="/" onClick={toggleSidebar} className="mb-6 group">
        <img
          className="w-36 h-36 rounded-full border-4 border-slate-600 shadow-xl transition-all duration-300 group-hover:border-white group-hover:shadow-2xl group-hover:scale-105"
          src="/assets/matt-profile.jpg"
          alt="Matt Moreno Profile"
        />
      </Link>

      {/* Name */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center transition-all duration-300 hover:text-white hover:bg-slate-700 cursor-default py-2 px-4 rounded-lg">
        Matt Moreno
      </h2>

      {/* Social Icons */}
      <div className="flex gap-4 mb-8">
        <Link
          to="https://www.linkedin.com/in/matthew-moreno-76b58880/"
          target="_blank"
          className="text-slate-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:bg-slate-700 p-3 rounded-full border-2 border-slate-600 hover:border-blue-400 shadow-lg hover:shadow-xl"
          aria-label="LinkedIn Profile"
        >
          <BsLinkedin className="text-xl" />
        </Link>
        <Link
          to="https://github.com/matt-moreno"
          target="_blank"
          className="text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:bg-slate-700 p-3 rounded-full border-2 border-slate-600 hover:border-white shadow-lg hover:shadow-xl"
          aria-label="GitHub Profile"
        >
          <BsGithub className="text-xl" />
        </Link>
        <Link
          to="https://www.instagram.com/matt_moreno64/"
          target="_blank"
          className="text-slate-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:bg-slate-700 p-3 rounded-full border-2 border-slate-600 hover:border-pink-400 shadow-lg hover:shadow-xl"
          aria-label="Instagram Profile"
        >
          <BsInstagram className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
