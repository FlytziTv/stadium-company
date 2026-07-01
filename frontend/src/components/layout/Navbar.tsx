import { UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/evenements", label: "Événements" },
  { to: "/billetterie", label: "Billetterie" },
  { to: "/restauration", label: "Restauration" },
  { to: "/boutique", label: "Boutique" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-foreground sticky top-0 z-50">
      <nav className="max-w-350 mx-auto grid grid-cols-[200px_1fr_200px] items-center px-10 py-4">
        <NavLink to="/" className="text-xl font-extrabold text-background">
          Stadium <span className="text-accent">Company</span>
        </NavLink>

        <div className="flex items-center justify-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 px-4 py-1.5 rounded-sm ${
                  isActive
                    ? "text-background bg-accent"
                    : "text-background/65 hover:text-background"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex justify-end">
          <NavLink
            to="/login"
            className="flex items-center gap-2 bg-accent text-background text-sm font-medium px-4 py-1.5 rounded-sm hover:opacity-90 transition-opacity duration-200"
          >
            <UserRound size={16} />
            Connexion
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
