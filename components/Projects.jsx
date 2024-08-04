// components/Projects.jsx
import TailwindIcon from "./Icons/Tailwind"; // Asegúrate de que estos componentes están adaptados a React
import NuxtIcon from "./Icons/Nuxt";
import LaravelIcon from "./Icons/Laravel";
import NodeIcon from "./Icons/Node";
import VueIcon from "./Icons/Vue";
import GithubIcon from "./Icons/Github";
import LinkIcon from "./Icons/Link";
import FirebaseIcon from "./Icons/FirebaseIcon";
import AlpineIcon from "./Icons/Alpine";
import StripeIcon from "./Icons/Stripe";
import SqlIcon from "./Icons/Sql";
import AstroIcon from "./Icons/AstroIcon";

const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    className: "bg-[#003159] text-white",
    icon: <TailwindIcon className="w-6 h-6" />,
  },
  NUXT: {
    name: "Nuxt",
    className: "bg-[#027245] text-white",
    icon: <NuxtIcon className="w-6 h-6" />,
  },
  NODE: {
    name: "Node.js",
    className: "bg-[#5d7f38] text-white",
    icon: <NodeIcon className="w-6 h-6" />,
  },
  VUE: {
    name: "Vue.js",
    className: "bg-[#246a4b] text-white",
    icon: <VueIcon className="w-6 h-6" />,
  },
  LARAVEL: {
    name: "Laravel",
    className: "bg-[#eae4ea] text-black",
    icon: <LaravelIcon className="w-6 h-6" />,
  },
  FIREBASE: {
    name: "Firebase",
    className: "bg-[#1a73e9] text-white",
    icon: <FirebaseIcon className="w-6 h-6" />,
  },
  ALPINE: {
    name: "Alpine.js",
    className: "bg-[#1a73e9] text-white",
    icon: <AlpineIcon className="w-6 h-6" />,
  },
  STRIPE: {
    name: "Stripe",
    className: "bg-[#635bff] text-white",
    icon: <StripeIcon className="w-6 h-6" />,
  },
  SQL: {
    name: "MySQL",
    className: "bg-[#eae4ea] text-black",
    icon: <SqlIcon className="w-6 h-6" />,
  },
  ASTRO: {
    name: "Astro",
    className: "bg-[#ffffff] text-black",
    icon: <AstroIcon className="w-6 h-6" />,
  },
};

const PROJECTS = [
  {
    title: "JetLink",
    subtitle: "Link Shortener",
    description:
      "URL shortening platform that provides an efficient and practical solution to simplify your web links. Convert long URLs into more compact versions, enhancing the aesthetics and providing analytics to your links.",
    link: "https://jetlinkr.vercel.app/",
    image: "/jetLink.webp",
    github: "https://github.com/RicardoCastelloBerenguer/jetLink",
    tags: [TAGS.NUXT, TAGS.NODE, TAGS.TAILWIND, TAGS.SQL],
  },
  {
    title: "Mediared",
    subtitle: "Social Network App",
    description:
      "Social network inspired on popular applications such as TikTok, YouTube, and Instagram. MediaRed allows you to create, upload, and share your unique videos with a global community of users, as well as interact through likes and comments on any video shared by another user.",
    link: "https://ricardo.mediared.net",
    image: "/mediaRed.webp",
    tags: [TAGS.NUXT, TAGS.LARAVEL, TAGS.TAILWIND, TAGS.SQL],
  },
  {
    title: "Messagie",
    subtitle: "Chat",
    description:
      "Project that simulates a real-time chat on a server. This application allows users to create and edit chats, providing an interactive experience. The implementation of a login system with Firebase, using Google accounts, ensures efficient and secure authentication within the service.",
    link: "https://messagie.netlify.app",
    image: "/messagie.webp",
    tags: [TAGS.VUE, TAGS.FIREBASE, TAGS.TAILWIND],
  },
  {
    title: "Spotify",
    subtitle: "Music Player",
    description:
      "Music player inspired by the style of Spotify's interface, developed to deliver an immersive musical experience. This application features multiple playlists, offering a diverse range of music, and comes equipped with a fully functional music player for seamless playback.",
    link: "https://ricardo-spotify.netlify.app",
    image: "/spotify.webp",
    tags: [TAGS.VUE, TAGS.TAILWIND],
  },
  {
    title: "Oufiten",
    subtitle: "Admin Panel E-commerce",
    description:
      "A tool that empowers administrators and managers to monitor and analyze crucial data within their company. Through graphs, tables, and other visual elements, this dashboard offers a real-time overview of the company's performance, enabling the identification of trends, patterns, and areas of concern.",
    github: "https://github.com/RicardoCastelloBerenguer/Oufiten",
    image: "/admin.webp",
    tags: [TAGS.VUE, TAGS.TAILWIND, TAGS.SQL],
  },
  {
    title: "Oufiten",
    subtitle: "Client View E-commerce",
    description:
      "Clothing e-commerce website featuring seamless payment processing with Stripe, streamlined order management, and user-friendly navigation for a smooth web experience.",
    github: "https://github.com/RicardoCastelloBerenguer/Oufiten",
    image: "/client.webp",
    tags: [TAGS.LARAVEL, TAGS.ALPINE, TAGS.STRIPE, TAGS.SQL],
  },
  {
    title: "Tesla",
    subtitle: "Landing Page",
    description:
      "Recreation of the landing page of Tesla's website. The goal is to replicate the visual and interactive elements of the original landing page, showcasing Tesla's electric vehicles and highlighting key features.",
    github: "https://github.com/RicardoCastelloBerenguer/Tesla-landing",
    link: "https://tesla-landing-ricardo.netlify.app/",
    image: "/tesla.webp",
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
  },
];

export default function Projects() {
  return (
    <>
      {PROJECTS.map((project, index) => (
        <article
          key={index}
          className="flex flex-col space-x-0 items-center space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Image Project"
                    className="object-cover object-top w-full transition duration-300 md:scale-110 md:group-hover:scale-105 shadow-black shadow-2xl"
                    loading="eager"
                    src={project.image}
                  />
                </a>
              ) : (
                <img
                  alt="Image Project"
                  className="object-cover object-top w-full transition duration-300 md:scale-110 md:group-hover:scale-105 shadow-black shadow-2xl"
                  loading="eager"
                  src={project.image}
                />
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-yellow-300">{project.title}</span> -{" "}
              {project.subtitle}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2 flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>
                    <span
                      className={`rounded-full text-xs ${tag.className} px-3 flex items-center gap-1 cursor-default`}
                    >
                      {tag.icon}
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <span className="mt-4 mb-4 text-sm font-normal text-gray-100 dark:text-gray-400 text-pretty group-hover:opacity-100 opacity-100 md:opacity-70 transition-opacity cursor-default">
                {project.description}
              </span>

              <footer className="flex items-center justify-start gap-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 rounded-lg p-2 flex items-center justify-center gap-x-2 transition hover:border-yellow-300 hover:scale-105"
                  >
                    <GithubIcon className="w-6 h-6" />
                    Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 rounded-lg p-2 flex items-center justify-center gap-x-2 transition hover:border-yellow-300 hover:scale-105"
                  >
                    <LinkIcon className="w-6 h-6" />
                    Preview
                  </a>
                )}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
