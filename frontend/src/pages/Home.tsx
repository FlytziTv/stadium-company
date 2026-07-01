import { ArrowRight, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";
import TitleSection from "../components/pages/TitleSection";
import { actualites, events, services, stats } from "../lib/data";
import EventsCard from "../components/card/EventsCard";
import ServicesCard from "../components/card/ServicesCard";
import ActualitésCard from "../components/card/ActualitésCard";

function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <img
          src="/image/stade.png"
          alt="Stade"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 h-full max-w-350 mx-auto flex items-end pb-12.5 px-5">
          <div className="flex flex-col gap-2 w-[550px]">
            <h1 className="text-6xl font-extrabold text-white uppercase">
              Vivez <br />
              l'expérience
              <br /> <span className="text-accent">Stadium</span>
            </h1>
            <p className="text-background/70 text-lg">
              45 000 places, des événements sportifs et culturels inoubliables,
              au cœur de la métropole.
            </p>
            <div className="flex flex-row items-center gap-3">
              <NavLink
                to="/billetterie"
                className="text-base font-medium text-background px-4 py-2 rounded-sm bg-accent border border-transparent flex flex-row items-center gap-2 hover:bg-accent/80 transition-colors"
              >
                <Ticket size={18} />
                Acheter des billets
              </NavLink>

              <NavLink
                to="/evenements"
                className="text-base font-medium text-background px-4 py-2 rounded-sm bg-background/20 border border-background/60 flex flex-row items-center gap-2 hover:bg-background/30 transition-colors"
              >
                Voir le programme
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-accent">
        <div className="max-w-350 mx-auto px-5 flex flex-row justify-around gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center gap-1"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-background/75 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prochains événements */}
      <section className="py-20 max-w-350 w-full mx-auto px-5 flex flex-col gap-8">
        <TitleSection
          sup="Programme"
          title="PROCHAINS ÉVÉNEMENTS"
          sub="Sport, musique, spectacles — tout se passe ici."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((ev, index) => (
            <EventsCard key={index} {...ev} />
          ))}
        </div>
        <div className="text-center mt-8">
          <NavLink
            to="/evenements"
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors duration-200 font-semibold"
          >
            Voir tout le programme <ArrowRight size={15} />
          </NavLink>
        </div>
      </section>

      {/* Service */}
      <section className="py-20 bg-secondary">
        <div className="max-w-350 w-full mx-auto px-5 flex flex-col gap-8">
          <TitleSection sup="Services" title="TOUT SOUS UN MÊME TOIT" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServicesCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-20 max-w-350 w-full mx-auto px-5 flex flex-col gap-8">
        <TitleSection sup="Actualités" title="DERNIÈRES NOUVELLES" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actualites.map((act, index) => (
            <ActualitésCard key={index} {...act} />
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <img
          src="https://img.20mn.fr/C4JdMxOFTR-suct-h1RtKik/1444x920_al-khor-ak-20-11-2022-qatar-vs-ecuador-several-seats-in-the-stands-are-seen-empty-before-the-end-of-the-game-during-the-match-between-qatar-and-ecuador-valid-for-the-first-round-of-group-a-of-the-world-cup-group-stage-held-at-al-bayt-stadium-in-al-khor-qatar-photo-marcelo-machado-de-melo-fotoarena-sipa-usa-42869934-marcelo-machado-de-melo-2211202152"
          alt="Stade en feu"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-4xl font-black">
              PRÊT POUR LE PROCHAIN MATCH ?
            </h2>
            <p className="text-white/70">
              Réservez vos places avant qu'il ne soit trop tard.
            </p>
          </div>
          <NavLink
            to="/billetterie"
            className="bg-accent hover:bg-red-700 text-white px-8 py-2 rounded-sm font-semibold transition-colors text-md"
          >
            Réserver maintenant
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Home;
