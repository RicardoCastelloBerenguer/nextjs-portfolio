// components/ExperienceItem.jsx
export default function ExperienceItem({
  title,
  description,
  date,
  companyName,
}) {
  return (
    <div className="relative p-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-300 dark:text-white mb-1">
        {title}
        <span className="text-white"> {companyName}</span>
      </h3>
      <p className="mb-4 text-xs sm:text-base md:text-base font-normal text-gray-100 opacity-70 dark:text-gray-400 text-pretty group-hover:opacity-100 transition-opacity cursor-default">
        {description}
      </p>
    </div>
  );
}
