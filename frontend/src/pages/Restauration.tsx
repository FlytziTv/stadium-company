import MenuCard from "../components/card/MenuCard";
import ReservationForm from "../components/form/ReservationForm";
import TitlePage from "../components/pages/TitlePage";
import TitleSection from "../components/pages/TitleSection";
import { MenusRestauration } from "../lib/data";

function Restauration() {
  return (
    <main>
      <TitlePage
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=500&fit=crop&auto=format"
        imageAlt="Stade en feu"
        title="LE PANORAMA"
        description="Restaurant gastronomique du stade — Vue sur la pelouse"
      />

      {/* Description */}
      <section className="py-20 max-w-350 w-full mx-auto px-5  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          {/* Titre */}
          <div className="flex flex-col gap-2">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">
              Notre restaurant
            </p>
            <h2 className="text-4xl font-black text-primary">
              UNE EXPÉRIENCE <br />
              GASTRONOMIQUE UNIQUE
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Surplombant la pelouse du stade, Le Panorama vous propose une
            cuisine gastronomique élaborée par notre chef étoilé. Ouvert les
            soirs d'événements et le midi en semaine.
          </p>

          {/* Chiffres */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground leading-relaxed">
              Capacité : 120 couverts. Réservation recommandée.
            </p>

            <div className="flex gap-6">
              <div>
                <div className="text-2xl font-black text-primary">120</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Couverts
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-primary">1★</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Michelin
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-primary">14</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Collaborateurs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-3 h-72">
          <div className="rounded-xl overflow-hidden row-span-2 bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop&auto=format"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=220&fit=crop&auto=format"
              alt="Intérieur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&h=220&fit=crop&auto=format"
              alt="Plat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="py-20 max-w-350 w-full mx-auto px-5 flex flex-col gap-8">
        <TitleSection sup="Notre carte" title="LES MENUS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {MenusRestauration.map((menu) => (
            <MenuCard key={menu.name} {...menu} />
          ))}
        </div>
      </section>

      {/* Menus */}
      <section className="py-20 max-w-4xl w-full mx-auto px-5 flex flex-col gap-8">
        <TitleSection sup="Réservation" title="RÉSERVER UNE TABLE" />
        <ReservationForm />
      </section>
    </main>
  );
}

export default Restauration;
