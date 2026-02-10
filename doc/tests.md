
# Tests

Ceci est une descriptions de plusieurs tests manuels à effectuer.

Le but est de permettre de fournir rapidement une vérification.
du fonctionnement du logiciel.

# Test 1 : Le système d'onglet est fonctionnel

Cliquer sur la page de connexion sur les items "Accueil", et "A propos" plusieurs fois.
Il faut vérifier que le contenu de la page change bien, à chaque fois qu'un item est
cliqué.

Inutile à cette étape de vérifier le contenu des onglets. Il s'agit plutôt de vérifier
que le processus de gestion des onglets est fonctionnel.

# Test 2 : Vérification du processus d'Inscription

Connectez vous à la base de donnée, et dans la table "REGISTERED_USER" supprimez
l'utilisateur avec votre mail si nécessaire. L'idée est que le logiciel interdit
à 2 utilisateurs d'avoir le même mail.

Essayez de vous connectez après le processus d'inscription, sans avoir cliqué
sur le lien reçu en mail. Alors la connexion doit échoué, et un message d'erreur
d'authentification doit apparaitre.

Cliquez ensuite en mail sur le lien de vérification d'email. Alors la connexion
doit être possible. Et vouss devez voir apparaitre en haut à droite votre pseudo.


# Test 3 : Impossible de se connecter avec un mauvais mot de passe


Essayez de vous connecter avec un mauvais mot de passe. Vérifiez qu'alors la connexion
échoue, et un message d'erreur d'authentification apparait.

Essayez ensuite de vous connecter avec votre bon mot de passe. La connexion doit alors 
pouvoir réussir.

