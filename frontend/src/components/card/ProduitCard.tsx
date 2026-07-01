export interface ProduitCardProps {
  imageSrc: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export default function ProduitCard({
  imageSrc,
  name,
  price,
  category,
}: ProduitCardProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden group hover:shadow-md transition cursor-pointer">
      {/* Image */}
      <div className="h-68 bg-secondary overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Information */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">{category}</span>
          <h3 className="font-bold text-primary text-sm leading-snug">
            {name}
          </h3>
        </div>

        {/* Prix */}
        <div className="flex items-center justify-between">
          <span className="text-accent font-black">{price}€</span>
          <button className="bg-primary text-white text-xs px-3 py-1.5 rounded hover:bg-primary/80 transition font-medium">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
