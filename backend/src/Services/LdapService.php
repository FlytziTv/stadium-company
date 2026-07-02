<!-- Service pour l'authentification LDAP -->
<!-- Le service LdapService permet d'authentifier les utilisateurs via LDAP -->

<?php
namespace App\Services;

// Service pour l'authentification LDAP
class LdapService
{
    // Propriétés pour stocker les informations de connexion LDAP
    private string $host;

    // Propriétés pour stocker le domaine et le DN de base LDAP
    private string $domain;

    // Propriétés pour stocker le DN de base LDAP
    private string $baseDn;

    // Constructeur pour initialiser les propriétés avec les valeurs des variables d'environnement
    public function __construct()
    {
        $this->host   = $_ENV['LDAP_HOST'];      // 172.20.1.14
        $this->domain = $_ENV['LDAP_DOMAIN'];    // stadiumcompany.com
        $this->baseDn = $_ENV['LDAP_BASE_DN'];   // DC=stadiumcompany,DC=com
    }

    // Méthode pour authentifier un utilisateur via LDAP
    // Elle prend en paramètre le login et le mot de passe de l'utilisateur, et renvoie un tableau d'informations utilisateur si l'authentification est réussie, sinon elle renvoie null
    public function authenticate(string $login, string $password): ?array
    {
        // Connexion au serveur LDAP
        $ldap = ldap_connect($this->host, 389);
        // Configuration des options LDAP pour utiliser le protocole version 3 et désactiver les referrals
        ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
        // Désactivation des referrals pour éviter les problèmes de redirection lors de l'authentification
        ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

        // Construction du principal de l'utilisateur (login@domain)
        $userPrincipal = $login . '@' . $this->domain;

        // Tentative de liaison (bind) avec le serveur LDAP en utilisant le principal et le mot de passe de l'utilisateur
        $bind = @ldap_bind($ldap, $userPrincipal, $password);

        if (!$bind) {
            return null; // identifiants invalides
        }

        // Recherche des informations de l'utilisateur dans l'annuaire LDAP
        $filter = "(sAMAccountName=$login)";
        // On récupère les attributs cn (nom complet), mail (adresse email) et memberOf (groupes d'appartenance)
        $search = ldap_search($ldap, $this->baseDn, $filter, ['cn', 'mail', 'memberOf']);
        // Récupération des entrées de la recherche LDAP
        $entries = ldap_get_entries($ldap, $search);

        // Fermeture de la connexion LDAP
        ldap_unbind($ldap);

        // Si aucune entrée n'est trouvée, on renvoie null
        if ($entries['count'] === 0) {
            return null;
        }

        // On renvoie un tableau contenant le login, le nom complet, l'adresse email et les groupes d'appartenance de l'utilisateur
        return [
            'login'  => $login,
            'nom'    => $entries[0]['cn'][0] ?? $login,
            'email'  => $entries[0]['mail'][0] ?? null,
            'groups' => $entries[0]['memberof'] ?? [],
        ];
    }
}