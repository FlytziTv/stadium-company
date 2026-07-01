"use client";

import { AlertCircle, Lock } from "lucide-react";
import { useState } from "react";

function Connect() {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === "admin" && pwd === "admin") {
      // onLogin();
    } else {
      setError("Identifiants incorrects. Essayez admin / admin");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Left panel */}
      <div className="flex w-1/2 bg-primary relative overflow-hidden items-end">
        <img
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=900&h=800&fit=crop&auto=format"
          alt="Stade"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-primary/30" />

        <div className="relative z-10 p-12 max-w-md">
          <h2 className="text-4xl font-black text-white mb-3">
            ESPACE COLLABORATEUR
          </h2>
          <p className="text-white/65">
            Connectez-vous avec vos identifiants Active Directory (domaine
            stadiumcompany.com) pour accéder à l'espace privé.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-secondary">
        <div className="w-full max-w-md">
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm flex flex-col gap-6">
            {/* Informations name */}
            <div className="flex items-center gap-3">
              <div>
                <div className="font-black text-primary text-sm">
                  STADIUMCOMPANY
                </div>
                <div className="text-xs text-muted-foreground">
                  Authentification LDAP
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-0">
              <h1 className="text-2xl font-black text-primary">CONNEXION</h1>
              <p className="text-sm text-muted-foreground">
                Utilisez vos identifiants de domaine stadiumcompany.com
              </p>
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-sm text-red-700">
                <AlertCircle size={14} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <InputGroup
                label="Identifiant AD"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />

              <InputGroup
                label="Mot de passe"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                type="password"
              />

              <button
                type="submit"
                className="w-full bg-primary text-sm text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                <Lock size={14} /> Se connecter
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center">
              Connexion sécurisée via LDAP — 172.20.1.14:389
              <br />
              En cas de problème, contactez le helpdesk GLPI
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Accès réservé aux collaborateurs StadiumCompany
          </p>
        </div>
      </div>
    </div>
  );
}

export default Connect;

function InputGroup({
  label,
  value,
  type,
  onChange,
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="block text-sm font-medium text-primary">{label}</label>
      <input
        placeholder="jdupont"
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-input-background"
      />
    </div>
  );
}
