<!-- Router Configuration -->
<!-- Ce fichier contient la configuration des routes de l'application -->
<!-- Le handler est une fonction qui sera exécutée lorsque la route sera appelée -->

<?php
namespace App;

// Sert à gérer les routes de l'application. Il permet de définir des routes pour différentes méthodes HTTP (GET, POST, etc.) et de dispatcher les requêtes entrantes vers les handlers appropriés.
class Router
{
    // Tableau associatif pour stocker les routes définies pour chaque méthode HTTP
    private array $routes = [];

    // Méthode pour définir une route GET
    // Elle prend en paramètre le chemin de la route et un handler (fonction) qui sera exécuté lorsque cette route sera appelée
    public function get(string $path, callable $handler): void
    {
        // On stocke le handler dans le tableau des routes pour la méthode GET
        $this->routes['GET'][$path] = $handler;
    }

    // Méthode pour définir une route POST
    // Elle prend en paramètre le chemin de la route et un handler (fonction) qui sera exécuté lorsque cette route sera appelée
    public function post(string $path, callable $handler): void
    {
        // On stocke le handler dans le tableau des routes pour la méthode POST
        $this->routes['POST'][$path] = $handler;
    }

    // Méthode pour dispatcher les requêtes entrantes
    // Elle prend en paramètre la méthode HTTP et l'URI de la requête, et exécute le handler correspondant si la route est définie, sinon elle renvoie une erreur 404
    public function dispatch(string $method, string $uri): void
    {
        // On parse l'URI pour obtenir le chemin de la route
        $path = parse_url($uri, PHP_URL_PATH);
        // On récupère le handler correspondant à la méthode et au chemin de la route
        $handler = $this->routes[$method][$path] ?? null;

        // Si aucun handler n'est trouvé, on renvoie une erreur 404
        if (!$handler) {
            http_response_code(404);
            echo json_encode(['error' => 'Route introuvable']);
            return;
        }

        // Si un handler est trouvé, on l'exécute et on renvoie la réponse au format JSON
        echo json_encode($handler());
    }
}