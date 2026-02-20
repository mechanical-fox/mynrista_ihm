
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

## Idée 2 : Ajout d'une 3ème top

Ajout d'un 3ème top qui mixera note + date release. S'aider de la présentation du 2ème top.


La formule de calcul sera note, et faire -10% pour chaque année écoulé. Mais à faire sous forme
de puissance, afin que même d'anciens jeux puissent être proposé. La valeur de -10% sera d'ailleurs
à mettre en paramètre, et sera éventuellement moins que 10. Comme par exemple 5%.

## Idée 3 : Ajout d'un bouton "Steam" et un "Itchio".

Ajouter un bouton Steam, ou itchio. QUi renvoit vers la bonne page Steam. 
Et cela sur la page détail.

## Idée 4 : Possibilité de mettre Favoris + Interessé / Acheter...

Ici il y a 2 fonctions. L'on doit pouvoir faire une liste de Favoris, et il y aura une page favoris
à indiquer au client.

Ensuite un client doit pouvoir marqué des Visual Novels comme "Interessé", "Acheté", "En cours", "Fini".
Ces états seront utilisés après pour des recommandations par genre

## Idée 5 : Ajout de recommandation

Permettre d'avoir des recommandations. A faire uniquement en fonction du genre + d'un score qui sera le 
même que pour le 3ème top (mix note et date release).

Les genres recommandés seront en fonction des genres des jeux marqués "Intéréssés", "Acheté",...

ATTENTION, afin que la fonctionnalité soit visibles aux non connectés. Dans "About" maintenant faire bien
plus une présentation du site. Et parler de ce système de recommandation.

ATTENTION, afin que la fonctionnalité soit visible si aucun jeux n'a été marqué. Mettre le message
"Veuillez marquez des jeux comme intéressé, acheté... afin d'obtenir plus de recommandation". Et ce message
doit être visible en connecté.

## Idée 6 : Ajout Dark Mode site Mynrista et New Erdline

Pour le site Mynrista, et le site New Erdline, passer la présentation en dark mode.

Par contre pour le portfolio faire du light mode, et prendre la présentation proche de 
Ancien Erdline. Juste faire la police d'écriture plus grande que l'ancien Erdline.


### Idée 7: Amélioration processus d'inscription

Le processus d'inscription actuelle à 2 soucis:
- l'API doit être démarré en mode Admin à cause de l'utilisation du port 80. Lié à servir une page web par l'API lors de la vérification.
- A la page de vérification, il n'est pas possible de continuer sur le site usuel
- La présentation de la page de vérification n'est pas hyper jolie, ni hyper raccord avec le site habituel

Pour gérer ce soucis, le mieux serait de faire une deuxième page IHM "vérification", qui prendrait en paramètre query le token.
Et cette page IHM ferait une requête à l'API pour faire la vérification, et l'activation.
Donc ici à voir comment on gère les paramètres query pour des pages vue, mais aussi voir comment on fait plusieurs pages.

Et l'idée serait ensuite pour l'API d'enfin changer, le port de 80 à un port ne nécessittant pas de lancer l'API comme admin.
