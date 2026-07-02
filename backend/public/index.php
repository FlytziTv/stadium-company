<!-- Point d'entrée de l'application -->
<!-- Ce fichier est le point d'entrée de l'application et gère toutes les requêtes entrantes -->

<?php
// Autoload des dépendances via Composer
// cette fonction permet de charger automatiquement les classes nécessaires à l'application sans avoir à les inclure manuellement
require __DIR__ . '/../vendor/autoload.php';

// Chargement des variables d'environnement depuis le fichier .env
use Dotenv\Dotenv;

// Chargement des variables d'environnement depuis le fichier .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();


// CORS — nécessaire car ton frontend Vite (5173) appelle ce backend (8000)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

// Gestion des requêtes OPTIONS pour le CORS
// Si la requête est de type OPTIONS, on renvoie un code 200 et on termine le script
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Instanciation du routeur et dispatch de la requête
$router = new App\Router();
// Chargement des routes depuis le fichier routes.php
require __DIR__ . '/../src/routes.php';
// Dispatch de la requête en fonction de la méthode HTTP et de l'URI
$router->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);