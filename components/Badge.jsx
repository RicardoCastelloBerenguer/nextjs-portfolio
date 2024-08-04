// components/ButtonSpan.jsx
export default function ButtonSpan({ children }) {
  return (
    <span className="bg-transparent text-white text-sm font-bold px-6 py-1 rounded-full border-2 border-white hover:scale-105 transition hover:border-yellow-300">
      {children}
    </span>
  );
}
