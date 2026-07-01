"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ReservationForm() {
  const [resConfirm, setResConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });

  return (
    <div>
      {resConfirm ? (
        <div className="text-center p-8 border border-border rounded-xl">
          <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
          <h3
            className="text-2xl font-black text-primary mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            TABLE RÉSERVÉE !
          </h3>
          <p className="text-muted-foreground">
            Votre réservation pour {form.guests} couvert(s) le {form.date} à{" "}
            {form.time} a bien été enregistrée.
          </p>
          <button
            onClick={() => setResConfirm(false)}
            className="mt-4 text-accent font-semibold hover:underline"
          >
            Nouvelle réservation
          </button>
        </div>
      ) : (
        <div className="border border-border rounded-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Nom & Prénom",
                key: "name",
                type: "text",
                placeholder: "Jean Dupont",
              },
              {
                label: "Email",
                key: "email",
                type: "email",
                placeholder: "jean@email.com",
              },
              {
                label: "Date souhaitée",
                key: "date",
                type: "date",
                placeholder: "",
              },
              { label: "Heure", key: "time", type: "time", placeholder: "" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-primary ">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <label className="block text-sm font-medium text-primary">
                Nombre de couverts
              </label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 flex flex-col gap-1">
              <label className="block text-sm font-medium text-primary">
                Commentaire / Allergies
              </label>
              <textarea
                rows={3}
                placeholder="Régime particulier, occasion spéciale..."
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background resize-none"
              />
            </div>
          </div>

          <button
            onClick={() =>
              form.name && form.email && form.date && setResConfirm(true)
            }
            className="text-sm mt-5 w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Confirmer la réservation
          </button>
        </div>
      )}
    </div>
  );
}
