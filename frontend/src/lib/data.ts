import {
  Award,
  Briefcase,
  Camera,
  MapPin,
  ShoppingBag,
  Star,
  Ticket,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";
import type { EventsCardProps } from "../components/card/EventsCard";
import type { ServicesCardProps } from "../components/card/ServicesCard";
import type { ActualitésCardProps } from "../components/card/ActualitésCard";
import type { ProduitCardProps } from "../components/card/ProduitCard";
import type { SiteCardProps } from "../components/card/SiteCard";

export const stats = [
  { value: "45 000", label: "Places" },
  { value: "170", label: "Collaborateurs" },
  { value: "3", label: "Sites" },
  { value: "200+", label: "Événements / an" },
];

export const events: EventsCardProps[] = [
  {
    title: "FC Stadium vs Olympique Lyon",
    category: "Sport",
    date: "2025-07-15",
    time: "20:45",
    capacity: 45000,
    sold: 38500,
    price: 35,
    imageSrc:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=350&fit=crop&auto=format",
  },
  {
    title: "Concert : Coldplay World Tour",
    category: "Musique",
    date: "2025-07-22",
    time: "19:00",
    capacity: 45000,
    sold: 45000,
    price: 65,
    imageSrc:
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&h=350&fit=crop&auto=format",
  },
  {
    title: "Rugby – Finale Nationale",
    category: "Sport",
    date: "2025-08-03",
    time: "18:00",
    capacity: 45000,
    sold: 29000,
    price: 45,
    imageSrc:
      " https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=600&h=350&fit=crop&auto=format",
  },
  {
    title: "Spectacle : Cirque du Monde",
    category: "Spectacle",
    date: "2025-08-10",
    time: "20:00",
    capacity: 30000,
    sold: 12000,
    price: 40,
    imageSrc:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=350&fit=crop&auto=format",
  },
  {
    title: "FC Stadium vs PSG",
    category: "Sport",
    date: "2025-08-17",
    time: "21:00",
    capacity: 45000,
    sold: 44200,
    price: 50,
    imageSrc:
      "https://i.eurosport.com/2025/03/25/image-2d8180f1-dca4-4545-80fb-378b3db1f454-85-2560-1440.jpeg",
  },
  {
    title: "Festival Électro Summer",
    category: "Musique",
    date: "2025-08-24",
    time: "22:00",
    capacity: 20000,
    sold: 18500,
    price: 55,
    imageSrc:
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&h=350&fit=crop&auto=format",
  },
];

export const services: ServicesCardProps[] = [
  {
    icon: Ticket,
    title: "Billetterie",
    desc: "4 catégories de places : Pelouse, Tribune, VIP, Loge.",
    page: "/billetterie",
  },
  {
    icon: Utensils,
    title: "Restauration",
    desc: "Restaurant gastronomique et espaces de restauration rapide.",
    page: "/restauration",
  },
  {
    icon: ShoppingBag,
    title: "Boutique",
    desc: "Maillots, accessoires et souvenirs officiels.",
    page: "/boutique",
  },
  {
    icon: Star,
    title: "Espace VIP",
    desc: "Accès loges privatives, hospitalité premium, accrédiations presse.",
    page: "/login",
  },
];

export const actualites: ActualitésCardProps[] = [
  {
    date: "12 juin 2025",
    tag: "Club",
    title: "Prolongation du partenariat avec notre sponsor principal",
    excerpt:
      "StadiumCompany renouvelle son accord majeur pour 3 saisons supplémentaires.",
  },
  {
    date: "8 juin 2025",
    tag: "Infrastructure",
    title: "Rénovation de la Tribune Nord terminée avec succès",
    excerpt:
      "2 800 nouveaux sièges premium installés avant la reprise de septembre.",
  },
  {
    date: "3 juin 2025",
    tag: "Événement",
    title: "Record de billetterie pour le concert de l'été",
    excerpt: "45 000 places écoulées en moins de 48h pour Coldplay World Tour.",
  },
];

export const produits: ProduitCardProps[] = [
  {
    name: "Maillot Domicile 2024/25",
    price: 89,
    category: "Maillots",
    stock: 150,
    imageSrc:
      "https://images.footballfanatics.com/france-national-team/france-nike-home-stadium-shirt-2026_ss5_p-203721238+pv-1+u-lk9ttwlnrqxhnc5cg0eq+v-q0gjq4agj6zbg18hcg9k.jpg?_hv=2&w=1018",
  },
  {
    name: "Écharpe FC Stadium",
    price: 24,
    category: "Accessoires",
    stock: 320,
    imageSrc:
      "https://m.media-amazon.com/images/I/81obnjscqKL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Casquette Officielle",
    price: 32,
    category: "Accessoires",
    stock: 200,
    imageSrc:
      "https://contents.mediadecathlon.com/m15729454/k$34451104ff2fefb7d2b5a44f0ed08c37/picture.jpg",
  },
  {
    name: "Maillot Extérieur 2024/25",
    price: 89,
    category: "Maillots",
    stock: 98,
    imageSrc:
      "https://media.intersport.fr/is/image/intersportfr/IB5367_6YA_Q1?$product_grey$&layer=comp&fit=constrain,0&$produit_xl$&fmt=webp",
  },
  {
    name: "Tasse & Assiette Club",
    price: 28,
    category: "Maison",
    stock: 75,
    imageSrc:
      "https://images.footballfanatics.com/france-national-team/france-mug-and-bowl-set-with-gift-box_ss5_p-201179423+pv-2+u-d1vlrxpf1qlmzm5sy0zj+v-vdytglnlwpp0vtdereuf.jpg?_hv=2&w=1018",
  },
  {
    name: "Kit Supporter Junior",
    price: 55,
    category: "Enfants",
    stock: 60,
    imageSrc: "https://m.media-amazon.com/images/I/41xGWOUzLXL.jpg",
  },
];

export const sites: SiteCardProps[] = [
  {
    name: "Stade (Siège)",
    address: "1 Avenue du Stade, 75001 Paris",
    phone: "+33 1 23 45 67 89",
    type: "Principal",
  },
  {
    name: "Billetterie",
    address: "12 Rue de la République, 75002 Paris",
    phone: "+33 1 23 45 67 90",
    type: "Centre-ville",
  },
  {
    name: "Boutique Souvenirs",
    address: "5 Place du Commerce, 75003 Paris",
    phone: "+33 1 23 45 67 91",
    type: "Point de vente",
  },
];

export const horaires = [
  { day: "Lun – Ven", hours: "9h – 18h" },
  { day: "Samedi", hours: "10h – 16h" },
  { day: "Jours d'événement", hours: "Selon programme" },
];

export const chiffresAbout = [
  { val: "45 000", label: "Capacité", icon: Users },
  { val: "170", label: "Emplois permanents", icon: Briefcase },
  { val: "3", label: "Sites interconnectés", icon: MapPin },
  { val: "7", label: "Services internes", icon: Award },
];

export const servicesAbout = [
  {
    service: "Administration",
    effectif: "170 collaborateurs",
    role: "Gestion administrative globale",
  },
  {
    service: "Équipes",
    effectif: "164 collaborateurs",
    role: "Coordination des équipes opérationnelles",
  },
  {
    service: "WiFi",
    effectif: "100 utilisateurs",
    role: "Réseaux sans fil internes",
  },
  { service: "Caméra IP", effectif: "80 caméras", role: "Vidéosurveillance" },
  {
    service: "VIP – Presse",
    effectif: "80 collaborateurs",
    role: "Accueil VIP et relations presse",
  },
  {
    service: "Fournisseurs",
    effectif: "44 collaborateurs",
    role: "Relations fournisseurs & partenaires",
  },
  {
    service: "Restaurant",
    effectif: "14 collaborateurs",
    role: "Restauration interne",
  },
];

export const ValeursAbout = [
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Nous visons le meilleur dans chaque aspect de l'expérience spectateur.",
  },
  {
    icon: Users,
    title: "Communauté",
    desc: "Le stade est un lieu de rassemblement pour toute la région.",
  },
  {
    icon: Camera,
    title: "Innovation",
    desc: "Nous investissons dans les technologies pour moderniser votre expérience.",
  },
];
