import TitlePage from "../components/pages/TitlePage";
import { horaires, sites } from "../lib/data";
import SiteCard from "../components/card/SiteCard";
import ContactForm from "../components/form/ContactForm";

function Contact() {
  return (
    <main>
      <TitlePage
        imageSrc="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=350&fit=crop&auto=format"
        imageAlt="Stade en feu"
        title="Contact"
        description="Nous sommes à votre disposition"
      />

      <div className="max-w-350 mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Infos */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-primary">
              NOS {sites.length} SITES
            </h2>
            <div className="flex flex-col gap-2">
              {sites.map(({ name, address, phone, type }) => (
                <SiteCard
                  name={name}
                  address={address}
                  phone={phone}
                  type={type}
                />
              ))}
            </div>
          </div>

          {/* Horaires d'ouverture */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-primary text-sm uppercase tracking-wide">
              Horaires d'ouverture
            </h3>

            <div className="text-sm text-muted-foreground flex flex-col gap-1">
              {horaires.map(({ day, hours }) => (
                <div className="flex justify-between" key={day}>
                  <span>{day}</span>
                  <span className="font-medium text-foreground">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-2">
          <h3 className="text-2xl font-black text-primary">
            ENVOYEZ-NOUS UN MESSAGE
          </h3>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

export default Contact;
