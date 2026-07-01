import { ChevronRight } from "lucide-react";

export interface ActualitésCardProps {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
}

export default function ActualitésCard({
  tag,
  date,
  title,
  excerpt,
}: ActualitésCardProps) {
  return (
    <div className="flex flex-col gap-4 border border-border rounded-lg p-5 hover:shadow-sm transition">
      {/* Tag and Date */}
      <div className="flex items-center gap-2">
        <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded font-medium">
          {tag}
        </span>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>

      {/* Title and Excerpt */}
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-primary leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
        <button className="text-accent text-sm font-medium hover:underline flex items-center gap-1 mt-1">
          Lire la suite <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
