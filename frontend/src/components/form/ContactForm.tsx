"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <div>
      {sent ? (
        <div className="border border-border rounded-xl p-10 text-center">
          <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
          <h3 className="text-2xl font-black text-primary mb-2">
            MESSAGE ENVOYÉ
          </h3>
          <p className="text-muted-foreground">
            Nous vous répondrons dans les plus brefs délais (sous 48h ouvrées).
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-4 text-accent font-semibold hover:underline"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <div className="border border-border rounded-xl p-8 flex flex-col gap-4">
          {/* Input Nom et adresse email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputGroup
              label="Nom & Prénom *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <InputGroup
              label="Adresse email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Sujet selector */}
          <div className="flex flex-col gap-1">
            <label className="block text-sm font-medium text-primary">
              Sujet *
            </label>
            <select
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background"
            >
              <option value="">Sélectionnez un sujet</option>
              <option>Billetterie</option>
              <option>Réservation restaurant</option>
              <option>Partenariat / Sponsoring</option>
              <option>Presse / Médias</option>
              <option>Autre demande</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="block text-sm font-medium text-primary">
              Message *
            </label>
            <textarea
              rows={5}
              placeholder="Votre message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background resize-none"
            />
          </div>

          {/* Bouton envoyer */}
          <button
            onClick={() =>
              form.name &&
              form.email &&
              form.subject &&
              form.message &&
              setSent(true)
            }
            className="w-full text-sm bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Envoyer le message
          </button>
        </div>
      )}
    </div>
  );
}

function InputGroup({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="block text-sm font-medium text-primary ">{label}</label>
      <input
        type="text"
        placeholder="Jean Dupont"
        value={value}
        onChange={onChange}
        className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background"
      />
    </div>
  );
}
