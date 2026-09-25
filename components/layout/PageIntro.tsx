export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="bg-ivory pt-32 pb-16">
      <div className="section-pad mx-auto max-w-7xl">
        <p className="text-[11px] tracking-[0.28em] text-gold-600 uppercase">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl text-forest-900 md:text-6xl">{title}</h1>
        <span className="gold-rule-left mt-6 block" />
        <p className="mt-6 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </header>
  );
}
