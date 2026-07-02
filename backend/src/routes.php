<?php
// Ce fichier contient la configuration des routes de l'application
use App\Controllers\AuthController;
use App\Controllers\EvenementController;

// Définition des routes pour l'authentification
$router->post('/api/login', [new AuthController(), 'login']);
$router->get('/api/evenements', [new EvenementController(), 'index']);