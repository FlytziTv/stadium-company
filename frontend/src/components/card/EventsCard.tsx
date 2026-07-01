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
