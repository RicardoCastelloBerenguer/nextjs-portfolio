// components/Experience.jsx
import ExperienceItem from "./ExperienceItem"; // Asegúrate de tener este componente también

const EXPERIENCE = [
  {
    date: "March 2023 - Present ",
    title: "Independent Full Stack Software Developer",
    description:
      "Specialized in end-to-end project management, excelling in the development of dynamic and engaging websites. My focus has been on fostering meaningful social interactions in social network projects, implementing cutting-edge functionalities for enhanced eCommerce experiences, and creating immersive multimedia interfaces. My approach involves intuitive navigation and user interface design, ensuring a enjoyable user experience. Throughout this, I've acquired comprehensive knowledge across all web development phases, from conceptualization to production.",
  },
  {
    date: "August 2022 - February 2023",
    title: "Full Stack Developer",
    companyName: "- Tres Tristes Tigres",
    description:
      "Optimized and enhanced existing web applications. Implemented efficient development practices, collaborated in agile teams to achieve project milestones, and promptly resolved critical bugs. Achieved a significant improvement in application performance by reducing load times by 18%, and contributed to the design and optimization of databases.",
  },
];

export default function Experience() {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-[5px]">
      {EXPERIENCE.map((experience, index) => (
        <li key={index} className="mb-10 ml-4 group">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
}
