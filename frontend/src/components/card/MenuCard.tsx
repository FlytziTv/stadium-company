import { CheckCircle } from "lucide-react";

export interface MenuCardProps {
  name: string;
  price: string;
  items: string[];
  tag?: string;
}

export default function MenuCard({ name, price, items, tag }: MenuCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 border-2 rounded-xl p-6 ${tag === "Populaire" ? "border-accent" : "border-border"}`}
    >
      <div className="flex flex-col items-start gap-2">
        {tag && (
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded inline-block ${tag === "VIP" ? "bg-amber-100 text-amber-700" : "bg-accent text-white"}`}
          >
            {tag}
          </span>
        )}
        <h3 className="text-xl font-black text-primary">{name}</h3>
      </div>

      <div className="text-accent text-2xl font-black">
        {price}{" "}
        <span className="text-sm font-medium text-muted-foreground">
          / personne
        </span>
      </div>

      {/* Éléments du menu */}
      <ul className="flex flex-col gap-2">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <CheckCircle size={13} className="text-green-500 mt-0.5 shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
