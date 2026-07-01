import { useState } from "react";
import TitlePage from "../components/pages/TitlePage";
import { produits } from "../lib/data";
import ProduitCard from "../components/card/ProduitCard";
import { Filter } from "lucide-react";

function Boutique() {
  const [cat, setCat] = useState("Tous");
  const cats = ["Tous", "Maillots", "Accessoires", "Maison", "Enfants"];
  const filtered =
    cat === "Tous" ? produits : produits.filter((i) => i.category === cat);

  return (
    <main>
      <TitlePage
        imageSrc="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=350&fit=crop&auto=format"
        imageAlt="Stade en feu"
        title="Boutique Officielle"
        description="Maillots, accessoires et souvenirs officiels"
      />

      <div className="max-w-350 mx-auto px-5 py-12 flex flex-col gap-8">
        {/* Filtres */}
        <div className="flex flex-wrap items-center gap-3">
          <Filter size={15} className="text-muted-foreground" />
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${cat === c ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((produit) => (
            <ProduitCard {...produit} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Boutique;
