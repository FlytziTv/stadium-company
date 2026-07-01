"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import TitlePage from "../components/pages/TitlePage";
import { categoryColor } from "../lib/utils";
import { events } from "../lib/data";

function Billetterie() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [selectedCat, setSelectedCat] = useState("");
  const [qty, setQty] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState("");

  const generateReservationCode = () =>
    `RES-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

  const categories = [
    {
      name: "Pelouse",
      price: selectedEvent.price,
      desc: "Zone debout, ambiance supporters",
    },
    {
      name: "Tribune",
      price: selectedEvent.price + 15,
      desc: "Siège numéroté, vue dégagée",
    },
    {
      name: "VIP",
      price: selectedEvent.price + 80,
      desc: "Salon privatif, open bar inclus",
    },
    {
      name: "Loge",
      price: selectedEvent.price + 180,
      desc: "Loge privée, restauration incluse",
    },
  ];

  const selCat = categories.find((c) => c.name === selectedCat);
  const total = selCat ? selCat.price * qty : 0;

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-md flex flex-col items-center justify-center gap-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={32} className="text-green-600" />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-black text-primary">
              Réservation confirmée
            </h2>
            <p className="text-muted-foreground">
              N° de réservation : <strong>{reservationCode}</strong>
            </p>
            <p className="text-muted-foreground">
              Un email de confirmation a été envoyé à votre adresse.
            </p>
          </div>

          <button
            onClick={() => {
              setConfirmed(false);
              setSelectedCat("");
              setReservationCode("");
            }}
            className="bg-primary w-fit text-sm text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-primary/90 transition"
          >
            Nouvelle réservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <TitlePage
        imageSrc="https://parisfc.fr/wp-content/uploads/2025/09/Photo-1-RET.jpg"
        imageAlt="Stade en feu"
        title="Billetterie"
        description="Choisissez votre événement et réservez vos places"
      />

      <section className="py-20 max-w-350 w-full mx-auto px-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Événement */}
            <div className="flex flex-col gap-4">
              {/* Titre */}
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                1. Événement
              </h2>

              {/* Liste des événements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {events.map((ev) => {
                  const full = ev.sold >= ev.capacity;
                  const sel = selectedEvent.title === ev.title;
                  return (
                    <button
                      disabled={full}
                      onClick={() => {
                        setSelectedEvent(ev);
                        setSelectedCat("");
                      }}
                      className={[
                        "relative rounded-xl overflow-hidden text-left transition-all",
                        full
                          ? "opacity-40 cursor-not-allowed"
                          : "cursor-pointer",
                        sel
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:ring-1 hover:ring-primary/30 hover:ring-offset-1",
                      ].join(" ")}
                    >
                      {/* Image de l'événement */}
                      <div className="h-32 bg-primary overflow-hidden">
                        <img
                          src={ev.imageSrc}
                          alt={ev.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                      </div>

                      {/* Date */}
                      <div className="absolute top-2.5 left-2.5 bg-white rounded-lg px-2 py-1 text-center leading-none shadow-sm">
                        <div className="text-[9px] font-bold uppercase text-muted-foreground">
                          {new Date(ev.date).toLocaleDateString("fr-FR", {
                            month: "short",
                          })}
                        </div>
                        <div className="text-base font-black text-primary">
                          {new Date(ev.date).getDate()}
                        </div>
                      </div>

                      {/* Catégorie */}
                      <span
                        className={
                          "absolute top-2.5 right-2.5 text-xs font-semibold px-2 py-0.5 rounded " +
                          categoryColor[ev.category]
                        }
                      >
                        {ev.category}
                      </span>

                      {/* Sélection */}
                      {sel && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle size={15} className="text-white" />
                          </div>
                        </div>
                      )}

                      {/* Complet */}
                      {full && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded uppercase">
                            Complet
                          </span>
                        </div>
                      )}

                      {/* Informations */}
                      <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col gap-0.5">
                        <p className="text-white font-bold text-sm leading-tight drop-shadow">
                          {ev.title}
                        </p>
                        <p className="text-white/70 text-xs">
                          {ev.time} · dès {ev.price}€
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Catégories */}
            <div className="flex flex-col gap-4">
              {/* Titre */}
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                2. Catégorie de place
              </h2>

              {/* Liste des catégories */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map((cat) => {
                  const sel = selectedCat === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCat(cat.name)}
                      className={[
                        "flex flex-col gap-1 text-left p-4 rounded-xl border-2 transition-all",
                        sel
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-white hover:border-primary/40",
                      ].join(" ")}
                    >
                      {/* Titre de la categorie */}
                      <h3
                        className={
                          "text-xl font-black leading-none " +
                          (sel ? "text-white" : "text-primary")
                        }
                      >
                        {cat.name}
                      </h3>

                      {/* Description de la categorie */}
                      <span
                        className={
                          "text-xs mb-1 leading-snug " +
                          (sel ? "text-white/70" : "text-muted-foreground")
                        }
                      >
                        {cat.desc}
                      </span>

                      {/* Prix */}
                      <div
                        className={
                          "text-lg font-black " +
                          (sel ? "text-white" : "text-accent")
                        }
                      >
                        {cat.price}€{" "}
                        <span
                          className={
                            "text-xs " +
                            (sel ? "text-white/60" : "text-muted-foreground")
                          }
                        >
                          / place
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Quantité */}
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                3. Nombre de places
              </h2>

              {/* Ajouter ou supprimer des places */}
              <div className="flex items-center gap-3">
                {/* Bouton diminuer */}
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary transition font-bold text-lg"
                >
                  -
                </button>

                {/* Quantité */}
                <span className="text-2xl font-black text-primary w-8 text-center">
                  {qty}
                </span>

                {/* Bouton augmenter */}
                <button
                  onClick={() => setQty(Math.min(8, qty + 1))}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary transition font-bold text-lg"
                >
                  +
                </button>
                {/* Message */}
                <span className="text-sm text-muted-foreground">
                  max. 8 par commande
                </span>
              </div>
            </div>
          </div>

          {/* Récapitulatif */}
          <div className="lg:sticky lg:top-20 h-fit">
            <div className="border border-border rounded-xl p-6 bg-white">
              {/* Titre */}
              <h2 className="text-xl font-bold text-primary mb-4">
                RÉCAPITULATIF
              </h2>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Événement", value: selectedEvent.title },
                    { label: "Catégorie", value: selectedCat || "—" },
                    { label: "Places", value: qty },
                    {
                      label: "Total à payer",
                      value: total > 0 ? total + "€" : "—",
                    },
                  ].map(({ label, value }) => (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Total à payer */}
                <div className="border-t border-border pt-3 flex justify-between font-bold text-base text-primary">
                  <span>Total</span>
                  <span className="text-accent">
                    {total > 0 ? total + "€" : "—"}
                  </span>
                </div>
              </div>

              {/* Bouton confirmer */}
              <div className="flex flex-col items-center justify-center gap-3">
                <button
                  disabled={!selectedCat}
                  onClick={() => {
                    setReservationCode(generateReservationCode());
                    setConfirmed(true);
                  }}
                  className={
                    "w-full mt-5 py-3 rounded-sm font-bold text-sm transition-colors " +
                    (selectedCat
                      ? "bg-accent text-white hover:bg-red-700"
                      : "bg-secondary text-muted-foreground cursor-not-allowed")
                  }
                >
                  {selectedCat
                    ? "Confirmer la réservation"
                    : "Sélectionnez une catégorie"}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Paiement sécurisé · Annulation 48h avant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Billetterie;
