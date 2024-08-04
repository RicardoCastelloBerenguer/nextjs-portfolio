// components/SectionContainer.jsx
export default function SectionContainer({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`w-full lg:w-[920px] mx-auto pt-10 md:pt-16 lg:pt-20 flex flex-col gap-5 ${className}`}
    >
      {children}
    </section>
  );
}
