import { ShoppingBag, Star, Ticket, Utensils } from "lucide-react";
import type { EventsCardProps } from "../components/card/EventsCard";
import type { ServicesCardProps } from "../components/card/ServicesCard";
import type { ActualitésCardProps } from "../components/card/ActualitésCard";

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
