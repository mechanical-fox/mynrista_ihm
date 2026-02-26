
# Idées d'améliorations


## Idée 1 : Gestion des Visuals Novel sans Note / Pourcentage d'Evaluation

Certains Visual Novels sont sans Note / Pourcentage d'évaluation positives. Voir à gérer ce cas
ci, car actuellement cela n'est pas très bien géré. 

Rechercher via Catégorie le Visual Novel "Untold Atlas: otome sim inspired by expedition adventures"
pour avoir un exemple de Visual Novel sans pourcentage d'évaluation.

## Idée 2 : Ajouter Les catégories/tags en Vue détail

Lors du clic sur un Visual Novel, que cela soit en top ou via la page "Catégorie", l'on rentre
dans une page qui est appellé la vue détail.

Il faudrait penser à afficher sur cette page, les différents tags / catégories associés au visual
novel. Faire comme Steam, et au dessus d'un certain nombre de tag arreter de les afficher, et juste
ajouter un bouton avec une icone bootstrap "voir" qui permet de voir tous les tags. Et mettre en
infobulle "voir tous les tags".

## Idée 3: Ajout d'une barre de recherche

Ajouter une barre de recherche. Et cela surement dans la page catégorie, et bien faire attention à
la présentation en vue mobile.

Il faudra voir à adapter les tests si nécessaire. Car il y a de bonne chance que j'utilise des mots
clés SQL spécifique à PostgreSQL qui ne marcheront pas en test avec une base H2. Il me faudra alors
en tets soit envoyé une autre requête SQL, avec les mots clés pour la base H2, si cela existe. Ce
qui serait le mieux. Soit ne pas tester la barre de recherche en test unitaire.


## Idée 4 : Ajout d'un bouton "Steam" et un "Itchio".

Ajouter un bouton Steam, ou itchio. Qui renvoit vers la bonne page Steam, ou itchio, selon le bouton.
Et cela sur la page détail.

## Idée 5 : Permettre d'ajouter des captures d'écrans

Permettre pour les jeux d'ajouter des captures d'écran du jeu considéré. Eviter les vidéos par contre.
Cela risquerait d'être un peu lourd.

## Idée 6: Amélioration processus d'inscription

Le processus d'inscription actuelle à 2 soucis:
- l'API doit être démarrée en mode Admin à cause de l'utilisation du port 80. Lié à servir une 
page web par l'API lors de la vérification.
- A la page de vérification, il n'est pas possible de continuer sur le site usuel
- La présentation de la page de vérification n'est pas hyper jolie, ni hyper raccord avec le 
site habituel

Pour gérer ce soucis, le mieux serait de faire une deuxième page IHM "vérification", qui
prendrait en paramètre query le token. Et cette page IHM ferait une requête à l'API pour faire
la vérification, et l'activation. Donc ici à voir comment on gère les paramètres query pour des 
pages vue, mais aussi voir comment on fait plusieurs pages.

Et l'idée serait ensuite pour l'API d'enfin changer, le port de 80 à un port ne nécessittant pas
de lancer l'API comme admin.


## Idée 7 : Faire une vue profil client + séparer admin / non-admin

Faire une vrai vue de profil client. En client sur le bouton en haut à droite.
Juste permettre la modification des informations au début. Et plus tard, de voir les visuals novels
marqués en favoris, en "déjà acheté", ... et tout.

Et ensuite faire le fait d'avoir des comptes "admin" et "non admin". Les comptes non-admin devront 
pouvoir proposer des modifications, et créations de page. Les comptes admins auront les mêmes droits
que les comptes non-admin plus:
- Possibilité de valider les modifications des comptes non-admin
- Possibilité de modifier les Visual Novel, ou en créer sans devoir se faire valider par un admin
- Possibilité de supprimer des Visuals Novel (Fausse suppression en base)

Le flag admin devra être switché directement en base. Et il faudra écrire en README cette spécificité.

## Idée 8 : Possibilité de mettre Favoris + Interessé / Acheter...

Ici il y a 2 fonctions. L'on doit pouvoir faire une liste de Favoris, et il y aura une page favoris
à indiquer au client.

Ensuite un client doit pouvoir marqué des Visual Novels comme "Interessé", "Acheté", "En cours", "Fini".
Ces états seront utilisés après pour des recommandations par genre



## Idée 9 : Possibilité dd'ajouter des commentaires

Permettre aux clients d'ajouter des commentaires. Il faudra éventuellement ajouter quelques commentaires.
Mais je dirai en mettre juste 1/2 sur des Visuals Novels auxquelles j'ai pu jouer. Et toujours
avec le même compte qui ici me représentera.


## Idée 10 : Ajout d'une 3ème top

Ajout d'un 3ème top qui mixera note + date release. S'aider de la présentation du 2ème top.


La formule de calcul sera note, et faire -10% pour chaque année écoulé. Mais à faire sous forme
de puissance, afin que même d'anciens jeux puissent être proposé. La valeur de -10% sera d'ailleurs
à mettre en paramètre, et sera éventuellement moins que 10. Comme par exemple 5%.

## Idée 11 : Ajout de recommandations

Permettre d'avoir des recommandations. A faire uniquement en fonction du genre + d'un score qui sera le 
même que pour le 3ème top (mix note et date release).

Les genres recommandés seront en fonction des genres des jeux marqués "Intéréssés", "Acheté",...

Attention, afin que la fonctionnalité soit visibles aux recruteurs, qui seront surement non connectés. 
Dans "About" maintenant faire bien plus une présentation du site. Et parler de ce système de recommandation.

Attentions, afin que la fonctionnalité soit visible si aucun jeux n'a été marqué. Mettre le message
"Veuillez marquez des jeux comme intéressé, acheté... afin d'obtenir plus de recommandation". Et ce message
doit être visible en connecté.



