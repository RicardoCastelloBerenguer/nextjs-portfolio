// components/SocialPill.jsx
export default function SocialPill({ href, children, className = "" }) {
  return (
    <a
      className={`flex items-center justify-center gap-2 border-2 rounded-full border-white px-3 py-1 hover:text-black hover:bg-white hover:scale-105 transition duration-100 group bg-[#00091d] ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
