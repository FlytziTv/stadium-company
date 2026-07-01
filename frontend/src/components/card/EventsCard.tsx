import { Calendar, Clock } from "lucide-react";
import { categoryColor, formatDate, pct } from "../../lib/utils";
import { NavLink } from "react-router-dom";

export interface EventsCardProps {
  imageSrc: string;
  title: string;
  category: string;
  date: string;
  time: string;
  capacity: number;
  sold: number;
  price: number;
}

export default function EventsCard({
  imageSrc,
  title,
  category,
  date,
  time,
  capacity,
  sold,
  price,
}: EventsCardProps) {
  return (
    <NavLink
      to={`/evenements/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="h-44 bg-secondary overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Information Events */}
      <div className="p-4 flex flex-col gap-2">
        <span
          className={`text-xs font-semibold px-2 py-0.5 w-fit rounded ${categoryColor[category]}`}
        >
          {category}
        </span>

        {/* Event Details */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg text-primary leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {time}
            </span>
          </div>
        </div>

        {/* Prix et disponibilité */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-muted-foreground">Disponibilité</div>
            <div className="w-28 h-1.5 bg-secondary rounded-full">
              <div
                className={`h-full rounded-full ${pct(sold, capacity) === 100 ? "bg-red-500" : "bg-green-500"}`}
                style={{ width: `${pct(sold, capacity)}%` }}
              />
            </div>
          </div>
          <span className="text-primary font-bold text-sm">
            À partir de {price}€
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export function EventsCardSkeleton({
  imageSrc,
  title,
  category,
  date,
  time,
  capacity,
  sold,
  price,
}: EventsCardProps) {
  const full = sold >= capacity;

  return (
    <div className="border border-border rounded-lg overflow-hidden group hover:shadow-md transition">
      <div className="h-48 bg-secondary overflow-hidden relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {full && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-sm uppercase tracking-wider bg-red-600 px-3 py-1 rounded">
              Complet
            </span>
          </div>
        )}
      </div>

      {/* Information Events */}
      <div className="p-4 flex flex-col gap-2">
        <span
          className={`text-xs font-semibold px-2 py-0.5 w-fit rounded ${categoryColor[category]}`}
        >
          {category}
        </span>

        {/* Event Details */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg text-primary leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {time}
            </span>
          </div>
        </div>

        {/* Prix et disponibilité */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Taux de remplissage</span>
              <span className="font-medium">{pct(sold, capacity)}%</span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full">
              <div
                className={`h-full rounded-full ${full ? "bg-accent" : pct(sold, capacity) > 70 ? "bg-amber-500" : "bg-green-500"}`}
                style={{ width: `${pct(sold, capacity)}%` }}
              />
            </div>
          </div>

          {/* Price and Booking */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary">
              À partir de <span className="text-accent">{price}€</span>
            </span>
            <NavLink
              to="/billetterie"
              className={`px-4 py-1.5 rounded text-sm font-semibold transition-colors ${full ? "bg-secondary text-muted-foreground cursor-not-allowed" : "bg-accent text-white hover:bg-red-700"}`}
            >
              {full ? "Complet" : "Réserver"}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
