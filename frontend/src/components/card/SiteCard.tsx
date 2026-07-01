import { MapPin, Phone } from "lucide-react";

export interface SiteCardProps {
  name: string;
  address: string;
  phone: string;
  type: string;
}

export default function SiteCard({
  name,
  address,
  phone,
  type,
}: SiteCardProps) {
  return (
    <div
      key={name}
      className="border border-border rounded-lg p-4 flex flex-col gap-2"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-bold text-primary text-sm">{name}</h3>
        <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">
          {type}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground flex items-start gap-1.5">
          <MapPin size={12} className="mt-0.5 shrink-0 text-accent" />
          {address}
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          <Phone size={12} className="text-accent" />
          {phone}
        </p>
      </div>
    </div>
  );
}
