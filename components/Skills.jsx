// components/Skills.jsx
import ApiIcon from "./Icons/Api";
import AstroIcon from "./Icons/AstroIcon";
import AwsIcon from "./Icons/Aws";
import CSharpIcon from "./Icons/CSharp";
import CssIcon from "./Icons/Css";
import DockerIcon from "./Icons/Docker";
import FirebaseIcon from "./Icons/FirebaseIcon";
import GithubIcon from "./Icons/Github";
import HtmlIcon from "./Icons/Html";
import JavaIcon from "./Icons/Java";
import JavascriptIcon from "./Icons/Javascript";
import LaravelIcon from "./Icons/Laravel";
import NodeIcon from "./Icons/Node";
import NuxtIcon from "./Icons/Nuxt";
import PhpIcon from "./Icons/Php";
import ResponsiveIcon from "./Icons/Responsive";
import SqlIcon from "./Icons/Sql";
import TailwindIcon from "./Icons/Tailwind";
import TestIcon from "./Icons/Test";
import VueIcon from "./Icons/Vue";

const ICONS = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JAVASCRIPT: JavascriptIcon,
  PHP: PhpIcon,
  VUE: VueIcon,
  NODE: NodeIcon,
  LARAVEL: LaravelIcon,
  NUXT: NuxtIcon,
  TAILWIND: TailwindIcon,
  ASTRO: AstroIcon,
  FIREBASE: FirebaseIcon,
  GITHUB: GithubIcon,
  SQL: SqlIcon,
  API: ApiIcon,
  AWS: AwsIcon,
  GIT: GithubIcon,
  DOCKER: DockerIcon,
  RESPONSIVE: ResponsiveIcon,
  JAVA: JavaIcon,
  CSHARP: CSharpIcon,
  TESTING: TestIcon,
};

const SKILLS = [
  { name: "VUE", icon: ICONS.VUE },
  { name: "LARAVEL", icon: ICONS.LARAVEL },
  { name: "NUXT", icon: ICONS.NUXT },
  { name: "HTML", icon: ICONS.HTML },
  { name: "CSS", icon: ICONS.CSS },
  { name: "JAVASCRIPT", icon: ICONS.JAVASCRIPT },
  { name: "TAILWIND", icon: ICONS.TAILWIND },
  { name: "PHP", icon: ICONS.PHP },
  { name: "NODE", icon: ICONS.NODE },
  { name: "ASTRO", icon: ICONS.ASTRO },
  { name: "AWS", icon: ICONS.AWS },
  { name: "GIT", icon: ICONS.GIT },
  { name: "API", icon: ICONS.API },
  { name: "SQL & NOSQL", icon: ICONS.SQL },
  { name: "RESPONSIVE DESIGN", icon: ICONS.RESPONSIVE },
  { name: "DOCKER", icon: ICONS.DOCKER },
  { name: "JAVA", icon: ICONS.JAVA },
  { name: "CSHARP", icon: ICONS.CSHARP },
  { name: "TESTING", icon: ICONS.TESTING },
];

export default function Skills() {
  return (
    <section className="rounded-lg flex items-center justify-center flex-wrap gap-3 lg:w-[500px] mx-auto border-yellow-300">
      {SKILLS.map((skill, index) => (
        <div
          key={index}
          className={`text-white cursor-default rounded-md shadow-xl border-2 border-white/60 hover:border-yellow-300 hover:scale-95 flex items-center justify-center px-2 py-1 gap-x-2 transition duration-150`}
        >
          <skill.icon className="w-7 h-7 sm:w-10 sm:h-10" />
          {skill.name && (
            <span className="text-xs sm:text-sm">{skill.name}</span>
          )}
        </div>
      ))}
    </section>
  );
}
