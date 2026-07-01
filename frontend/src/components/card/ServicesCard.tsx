import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  page: string;
}

export default function ServicesCard({
  icon: Icon,
  title,
  desc,
  page,
}: ServicesCardProps) {
  return (
    <NavLink
      to={page}
      className="bg-white border border-border flex flex-col gap-4 p-6 rounded-lg hover:shadow-sm transition cursor-pointer group"
    >
      <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center group-hover:bg-accent/20 transition">
        <Icon size={18} className="text-accent" />
      </div>
      <h3 className="font-bold text-primary mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </NavLink>
  );
}
