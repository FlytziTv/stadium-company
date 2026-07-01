import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = {
  Navigation: [
    { to: "/evenements", label: "Événements" },
    { to: "/billetterie", label: "Billetterie" },
    { to: "/restauration", label: "Restauration" },
    { to: "/boutique", label: "Boutique" },
  ],
  Information: [
    { to: "/about", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ],
};

const contact = [
  {
    href: "https://www.google.com/maps",
    label: "1 Avenue du Stade, 75001 Paris",
    icon: MapPin,
    external: true,
  },
  { href: "tel:+33123456789", label: "+33 1 23 45 67 89", icon: Phone },
  {
    href: "mailto:contact@stadiumcompany.com",
    label: "contact@stadiumcompany.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground ">
      <nav className="max-w-350 mx-auto flex flex-row justify-between items-start px-5 py-10">
        {/* Logo and Description */}
        <div className="flex flex-col gap-2 w-70">
          <NavLink to="/" className="text-lg font-extrabold text-background">
            Stadium <span className="text-accent">Company</span>
          </NavLink>
          <p className="text-sm text-background/65">
            Votre stade multi-événements — 45 000 places, 170 collaborateurs, 3
            sites.
          </p>
        </div>

        {Object.entries(links).map(([category, linkList]) => (
          <div key={category} className="flex flex-col gap-2 w-70">
            <h2 className="text-lg font-bold text-background ">{category}</h2>

            <div className="flex flex-col gap-1">
              {linkList.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className="text-sm text-background/65 hover:text-background transition-colors duration-300"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2 w-70">
          <h2 className="text-lg font-bold text-background ">Contact</h2>

          <div className="flex flex-col gap-1">
            {contact.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex flex-row items-center gap-2 text-sm text-background/65 hover:text-background transition-colors duration-300"
              >
                <link.icon size={14} className="text-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="border-t border-[#D9D9D9]/10">
        <p className="text-center text-sm text-background/40 py-5">
          &copy; {new Date().getFullYear()} Stadium Company. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
