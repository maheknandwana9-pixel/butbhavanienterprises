interface SectionHeadingProps {
  label?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  heading,
  description,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="inline-block text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight ${
          light ? 'text-white' : 'text-dark-text'
        }`}
      >
        {heading}
      </h2>
      {centered && <div className="gold-line mx-auto mt-4" />}
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
