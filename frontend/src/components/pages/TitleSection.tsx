export default function TitleSection({
  sup,
  title,
  sub,
}: {
  sup?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-2">
      {sup && (
        <p className="text-accent text-sm font-semibold tracking-widest">
          {sup}
        </p>
      )}
      <h2 className="text-4xl font-extrabold text-primary">{title}</h2>
      {sub && <p className="text-muted-foreground max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}
