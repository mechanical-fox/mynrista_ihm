
# Idées d'améliorations

## Idée 1 : Ajout d'une page Catégorie

A côté de la page "Accueil", ajouter une page "Catégorie".
Faire 2 pages va déjà augmenter l'aspect esthétique du site. Donc il est bien
important de créer un nouvel onglet.

Ensuite, le plus important, de important. Afin de changer de la présentation de la page 
d'accueil, il faut faire la selection des catégories sur la Gauche et non en haut. Aussi, 
faire attention à avoir un nombre limité de catégorie. Et cela afin d'être sufissament joli.

Celle-ci doit permettre de selectionner des Visuals Novels par Catégorie, comme
"Aventure", "Romance", "...".

### Idée 2: Amélioration processus d'inscription

Le processus d'inscription actuelle à 2 soucis:
- l'API doit être démarré en mode Admin à cause de l'utilisation du port 80. Lié à servir une page web par l'API lors de la vérification.
- A la page de vérification, il n'est pas possible de continuer sur le site usuel
- La présentation de la page de vérification n'est pas hyper jolie, ni hyper raccord avec le site habituel

Pour gérer ce soucis, le mieux serait de faire une deuxième page IHM "vérification", qui prendrait en paramètre query le token.
Et cette page IHM ferait une requête à l'API pour faire la vérification, et l'activation.
Donc ici à voir comment on gère les paramètres query pour des pages vue, mais aussi voir comment on fait plusieurs pages.

Et l'idée serait ensuite pour l'API d'enfin changer, le port de 80 à un port ne nécessittant pas de lancer l'API comme admin.
