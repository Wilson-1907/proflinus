export function SectionHeading({
  eyebrow,
  title,
  lede,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-[11px] tracking-[0.28em] uppercase ${light ? "text-gold-400" : "text-gold-600"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-4xl leading-tight md:text-5xl ${light ? "text-ivory" : "text-forest-900"}`}
      >
        {title}
      </h2>
      <span className="gold-rule-left mt-5 block" />
      {lede ? (
        <p className={`mt-6 text-lg leading-relaxed ${light ? "text-ivory/80" : "text-muted"}`}>
          {lede}
        </p>
      ) : null}
    </header>
  );
}
