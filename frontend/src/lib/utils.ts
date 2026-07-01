export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const pct = (sold: number, cap: number) =>
  Math.round((sold / cap) * 100);

export const categoryColor: Record<string, string> = {
  Sport: "bg-blue-100 text-blue-700",
  Musique: "bg-purple-100 text-purple-700",
  Spectacle: "bg-amber-100 text-amber-700",
};
