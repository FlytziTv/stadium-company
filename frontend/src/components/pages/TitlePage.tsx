export default function TitlePage({
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative h-60 bg-primary overflow-hidden flex items-end">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
      <div className="relative z-10 max-w-350 mx-auto px-4 sm:px-6 pb-10 w-full">
        <h1
          className="text-5xl font-black text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-white/75 mt-1">{description}</p>
      </div>
    </div>
  );
}
