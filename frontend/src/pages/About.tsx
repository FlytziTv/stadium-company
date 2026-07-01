import TitlePage from "../components/pages/TitlePage";
import TitleSection from "../components/pages/TitleSection";
import { chiffresAbout, servicesAbout, ValeursAbout } from "../lib/data";

function About() {
  return (
    <main>
      <TitlePage
        imageSrc="https://img.20mn.fr/C4JdMxOFTR-suct-h1RtKik/1444x920_al-khor-ak-20-11-2022-qatar-vs-ecuador-several-seats-in-the-stands-are-seen-empty-before-the-end-of-the-game-during-the-match-between-qatar-and-ecuador-valid-for-the-first-round-of-group-a-of-the-world-cup-group-stage-held-at-al-bayt-stadium-in-al-khor-qatar-photo-marcelo-machado-de-melo-fotoarena-sipa-usa-42869934-marcelo-machado-de-melo-2211202152"
        imageAlt="Stade en feu"
        title="À propos"
        description="Notre histoire, nos valeurs, notre organisation"
      />

      <div className="max-w-350 mx-auto px-5 py-16 flex flex-col gap-20">
        {/* Histoire */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {/* Titre */}
            <div className="flex flex-col gap-1">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest">
                Notre histoire
              </p>
              <h2 className="text-4xl font-black text-primary">
                UN STADE AU CŒUR DE LA VILLE
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed">
                StadiumCompany gère l'un des plus grands stades multi-événements
                d'Europe. Inauguré en 1998, le stade a accueilli plus de 10
                millions de spectateurs depuis son ouverture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Initialement conçu pour les événements sportifs, le stade s'est
                progressivement ouvert à la culture : concerts, spectacles et
                expositions enrichissent aujourd'hui sa programmation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Face aux enjeux de modernisation, la direction a lancé en 2024
                un vaste plan de rénovation de l'infrastructure informatique
                pour offrir une expérience numérique à la hauteur des attentes.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="rounded-xl overflow-hidden h-80 bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=700&h=480&fit=crop&auto=format"
              alt="Stade intérieur"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        {/* Chiffres importants */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {chiffresAbout.map(({ val, label, icon: Icon }) => (
            <div
              key={label}
              className="border border-border rounded-lg p-6 text-center flex flex-col gap-2 items-center justify-center"
            >
              <Icon size={24} className="text-accent mx-auto" />

              <div className="flex flex-col items-center justify-center gap-1">
                <div className="text-4xl font-black text-primary">{val}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </section>

        {/* SERVICES */}
        <section className="flex flex-col gap-8">
          <TitleSection
            sup="Organisation"
            title={`Nos ${servicesAbout.length} services`}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">
                    SERVICE
                  </th>
                  <th className="text-left px-4 py-3 font-semibold">
                    EFFECTIF
                  </th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">
                    RÔLE
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicesAbout.map(({ service, effectif, role }, i) => (
                  <tr
                    key={service}
                    className={i % 2 === 0 ? "bg-white" : "bg-secondary"}
                  >
                    <td className="px-4 py-3 font-semibold text-primary">
                      {service}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {effectif}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Valeurs */}
        <section className="flex flex-col gap-8">
          <TitleSection sup="Nos valeurs" title="CE QUI NOUS ANIME" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ValeursAbout.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-8 bg-secondary rounded-xl"
              >
                <Icon size={32} className="text-accent mx-auto mb-4" />
                <h3
                  className="font-bold text-primary mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.2rem",
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
