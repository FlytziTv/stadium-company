# StadiumCompany — Site Web (Projet BTS SIO SLAM)

Site web officiel de **StadiumCompany**, développé dans le cadre du projet intégrateur BTS SIO (SISR / SLAM / CIEL). Ce dépôt couvre la partie **SLAM** : conception et développement du site web (vitrine + espace privé collaborateur), incluant billetterie, réservations, gestion d'événements et back-office.

Le site s'intègre dans l'infrastructure réseau déployée par les étudiants SISR (VLAN Serveurs `172.20.1.0/24`) et utilise l'Active Directory (`stadiumcompany.com`) pour l'authentification des employés.

---

## Contexte

StadiumCompany gère un stade multi-événements (170 employés, 7 services). Le site doit proposer :

- une vitrine publique (présentation, événements, billetterie, restauration, boutique)
- un espace privé pour les employés, authentifié via LDAP / Active Directory
- un back-office d'administration pour la gestion des événements, réservations et contenus

---

## Stack technique

| Couche               | Technologie                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| **Frontend**         | React + Vite (JavaScript/TypeScript, ES6+)                                      |
| **Styling**          | Tailwind CSS (à confirmer)                                                      |
| **Backend**          | PHP natif (évolution possible vers **Symfony**)                                 |
| **Base de données**  | MySQL / MariaDB                                                                 |
| **Authentification** | PHP LDAP + sessions/JWT, connecté à l'AD `stadiumcompany.com`                   |
| **Serveur**          | Apache2 (VM Linux Debian 12 / Ubuntu Server 22.04, VLAN Serveurs `172.20.1.50`) |
| **API**              | API REST PHP consommée par le frontend React                                    |
| **Sécurité**         | PDO + requêtes préparées, CSRF, XSS protection, HTTPS                           |
| **Versioning**       | Git                                                                             |

> Écart par rapport au cahier des charges initial : le frontend utilise **React + Vite** au lieu de HTML/CSS/JS vanilla, pour une architecture SPA plus moderne. Le backend PHP expose une API REST consommée par le front.

---

## Structure du repo (monorepo)

```
stadium-company/
├── frontend/                  # Application React + Vite
│   ├── src/
│   │   ├── pages/             # Pages publiques et privées
│   │   ├── components/
│   │   ├── services/          # Appels API (fetch/axios)
│   │   ├── context/           # Auth context, etc.
│   │   └── assets/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   # API PHP native
│   ├── public/                # index.php (point d'entrée)
│   ├── src/
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Services/          # LDAP, DB, etc.
│   │   └── Middlewares/       # Auth, CORS...
│   ├── config/                # Config DB, LDAP, env
│   └── database/
│       ├── migrations/
│       └── seeders/
│
├── docs/                      # MCD/MPD, wireframes, specs
├── .env.example
└── README.md
```

---

## Installation

### Prérequis

- Node.js 18+ / npm ou pnpm
- PHP 8.1+ avec extensions : `pdo`, `pdo_mysql`, `ldap`, `curl`, `mbstring`, `gd`
- MySQL/MariaDB 10.x
- Apache2 (ou serveur PHP intégré pour le dev)
- Accès à un serveur AD/LDAP (fourni par l'équipe SISR — `172.20.1.14`)

### 1. Cloner le repo

```bash
git clone https://github.com/SZ-Developpement/stadiumcompany-web.git
cd stadiumcompany-web
```

### 2. Backend (PHP)

```bash
cd backend
cp .env.example .env
# Configurer .env : DB_HOST, DB_NAME, DB_USER, DB_PASS, LDAP_HOST, LDAP_BASE_DN...
php -S localhost:8000 -t public
```

### 3. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Le frontend tourne par défaut sur `http://localhost:5173` et consomme l'API sur `http://localhost:8000`.

---

## Configuration LDAP / Active Directory

L'authentification des employés se fait via LDAP sur l'AD déployé par les SISR.

| Paramètre | Valeur                     |
| --------- | -------------------------- |
| Hôte AD   | `172.20.1.14`              |
| Port      | `389` (ou `636` en LDAPS)  |
| Domaine   | `stadiumcompany.com`       |
| Base DN   | `DC=stadiumcompany,DC=com` |

Exemple de bind PHP (backend) :

```php
$ldap = ldap_connect('172.20.1.14', 389);
ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
$bind = ldap_bind($ldap, $login . '@stadiumcompany.com', $password);
```

---

## Fonctionnalités

### Pages publiques

- Accueil (présentation, actualités, diaporama)
- À propos
- Événements (calendrier, filtres par catégorie)
- Billetterie publique (consultation places, panier, paiement simulé)
- Restauration (menus, réservation de table)
- Boutique souvenirs (catalogue, commande en ligne)
- Contact (formulaire, plan d'accès, 3 sites)
- Mentions légales / CGU

### Espace privé (authentification AD)

- Connexion via LDAP
- Tableau de bord employé (vue selon le service)
- Gestion des réservations (CRUD événements, places, stats)
- Gestion des utilisateurs (annuaire AD synchronisé)
- Espace VIP / Presse (accréditations, passes)
- Espace Fournisseurs (commandes, factures, planning)

### Back-office admin (réservé au groupe `GP_Admin`)

- CRUD événements avec upload photos
- Gestion places/tarifs
- Réservations avec filtres et export CSV/PDF
- Gestion du contenu (actualités, pages statiques)
- Statistiques et graphiques (Chart.js)
- Gestion des messages de contact

---

## Modèle de données (aperçu)

| Table                     | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `evenements`              | Matchs, concerts, spectacles                       |
| `categories_evenement`    | Sport, Musique, Spectacle, Autre                   |
| `places`                  | Places par événement (Pelouse, Tribune, VIP, Loge) |
| `reservations`            | Réservations des visiteurs                         |
| `utilisateurs_web`        | Comptes synchronisés depuis l'AD                   |
| `reservations_restaurant` | Réservations de table                              |
| `articles_boutique`       | Catalogue boutique                                 |
| `commandes`               | Commandes en ligne                                 |
| `actualites`              | News du site                                       |
| `contacts`                | Messages du formulaire de contact                  |

Le MCD/MPD détaillé se trouve dans `docs/`.

---

## Sécurité

- Requêtes préparées PDO (protection injection SQL)
- Validation/sanitisation des entrées (`htmlspecialchars`, `filter_input`)
- Tokens CSRF sur tous les formulaires
- En-têtes CSP contre le XSS
- Sessions sécurisées (`httponly`, `secure`, régénération d'ID)
- Mots de passe locaux hashés (`password_hash` / `password_verify`)
- HTTPS (certificat auto-signé en environnement de dev)

---

## Intégration avec les autres filières

| Besoin                                    | Fourni par    |
| ----------------------------------------- | ------------- |
| IP et accès au serveur AD (`172.20.1.14`) | SISR          |
| VLANs pfSense opérationnels               | SISR          |
| Règles firewall pour le site web          | SISR          |
| Supervision HTTP du site                  | CIEL (Nagios) |
| Accès VM Linux pour agent NRPE            | SLAM → CIEL   |

---

## Documentation associée

- Maquettes (wireframes)
- MCD / MPD
- Dictionnaire des données
- Spécifications fonctionnelles
- Script SQL (schéma + données de test)
- Manuel utilisateur
- Rapport de tests
