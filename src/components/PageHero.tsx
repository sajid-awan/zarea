interface PageHeroProps {
  subtitle?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageHero({ subtitle, title, description, className = "" }: PageHeroProps) {
  return (
    <section className={`relative py-10 sm:py-10 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl mb-4 font-bold text-zarea-gray">
          {subtitle}
        </h2>
        <h1 className="text-[64px] font-bold text-zarea-black mb-4 leading-[120%] max-w-[1227px]">
          {title}
        </h1>
        <p className="text-zarea-black text-xl leading-[125%]">
          {description}
        </p>
      </div>
    </section>
  );
}