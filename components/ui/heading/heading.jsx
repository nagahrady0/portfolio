export default function Heading({ children, className = '' }) {
  return (
    <h1 className={`text-3xl md:text-4xl font-bold text-[var(--h1-color)] tracking-wide mt-5 relative after:content-[''] after:block after:h-[3px] after:w-full after:absolute after:bottom-[-12px] after:bg-[var(--second-color)] ${className}`}>
      {children}
    </h1>
  );
}