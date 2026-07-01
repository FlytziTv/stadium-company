import { useState } from "react";
import TitlePage from "../components/pages/TitlePage";
import { events } from "../lib/data";
import { Filter } from "lucide-react";
import { EventsCardSkeleton } from "../components/card/EventsCard";

function Evenements() {
  const [filter, setFilter] = useState("Tous");
  const cats = ["Tous", "Sport", "Musique", "Spectacle"];
  const filtered =
    filter === "Tous" ? events : events.filter((e) => e.category === filter);

  return (
    <main>
      <TitlePage
        imageSrc="https://www.gl-events.com/sites/default/files/2025-07/Stade%20de%20France/192_Stade_de_France_Concert_Coldplay_16Juillet_2022.jpg"
        imageAlt="Stade en feu"
        title="Événements"
        description="Matchs, concerts, spectacles — toute la programmation"
      />

      <div className="max-w-350 mx-auto px-5 py-12 flex flex-col gap-8">
        {/* Filtres */}
        <div className="flex flex-wrap items-center gap-3">
          <Filter size={15} className="text-muted-foreground" />

          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${filter === c ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ev) => {
            return (
              <EventsCardSkeleton
                imageSrc={ev.imageSrc}
                title={ev.title}
                category={ev.category}
                date={ev.date}
                time={ev.time}
                capacity={ev.capacity}
                sold={ev.sold}
                price={ev.price}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Evenements;
