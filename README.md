
# TO DO

EN FAIT CHANGEMENT IDEE TOTAL - Voir en bas 

Refaire en README la description du projet
Passer API en Java 25
Verifie Vue Compatible Mobile
Acheter OVH car en fait juste 22/an
Faire environnement dev et prod
Faire Test Unitaire
Indiquer comment avoir % couverture

FIRST

Voir comment envoyer mail depuis mon API en java + écrire code quelque part + utiliser erdline.fr pour cela

PRESENTATION TROUVEE

En haut La Barre façon Steam --> Couleur Noir ou Bleu foncée, Nom  + les boutons avec Accueil + A Propos Juste
En bas-> Faire un fond coloré comme Steam. Pour cela changer la couleur du body.
1- Avertisement qu'il s'agit d'un site vitrine
2- Une liste. S'inspirer de la façon Steam de montrer les sites "tableaux"
    Faire aussi le fait de faire un changement de couleur au survol. 



EN haut une barre droite "Mynrista", inspiré de https://www.fandom.com/

Juste en dessous le texte -> 

2- Partie Explorer, les vignettes en très grand car peu élément au début, et faire du encadré, image, nom.
S'inspirer de Steam au besoin.
3- En items un peu comme Mynrista

Au débbut niveau Explorer coder en dur avec un jeu, et du texte un peu n'importe quoi.

Puis ensuite après, dès départ commencer la gestion compte, d'abord sans email puis après avec email
ATTENTION penser à cacher le mot de passe
J'AI EXEMPLE Java MAIL au niveau de java_mail + de ma synthèse aussi
Dès le départ il faut commencer avec la gestion compte car... c'est la que l'on rentrera les info (hormis le mock du début)

Faire Compatible mobile.
PRESENTATION VOIR https://www.fandom.com/ et Steam
Visual Novel en anglais MAIS même si je choisit visual novel faire présentation en FRANCAIS + faire une section "Langue" ou 
   je dis les langues disponibles et comme site démo cela n'est pas trop grave
Faire En fait presentation fandom comme "https://steins-gate.fandom.com" et 1er version sans compte + après avec création compte. Au début me faire une page dédié qui demande un mot de passe, et me permettre de créer les pages.
Le site ne doit PAS apparaitre sur internet, donc bien écrire au début "portfolio" et tout. Mais faire malgré tout un message genre "alerte", mais ici genre message flotant, qui précise qu'il s'agit d'un portfolio. Et essayer au début de faire une page genre "welcome".
L'idée c'est je le fais avec mon API, et ma base de donnée. Donc je prends des informations, et je copie. Voir j'écris moi-même si Visual Novel. Juste il y aura alors peu de jeux... Et limite je devrais jouer juste pour aider mon site...
Idée à marquer en idée d'amélioration sera de mettre "Favoris", ainsi que mettre des notes aux Soit séries, soit Visual Novel.
Permettre de mettre des commentaire aussi ? Bref, tout cela sera déjà après le message de création de compte, qui doit se
faire avec un email.

J'hesite entre Séries (informations facilement disponible), et Visual Novel... Mais Visual Novel j'aurai sans doute assez peu à dire par moi même. Et si je prend d'un autre site... bah il y aura sans doute juste un seul autre site avec ces informations, donc cela ferait un peu plagiat.


# Projet

Ce projet contiendra le code de la partie web / graphique, du site Mynrista. Le site est en cours de
création. Il sera prévue d'utiliser la technologie Vue pour la partie graphique.

Les fonctionnalités prévues pour le site internet sont les suivantes:
- Pouvoir jouer à un jeux de type "Le joueur contrôle de labyrinthe" en navigateur internet
- Plusieurs niveaux sont proposées aux joueurs
- Chaque niveau est stocké en base de donnée
- Il n'est pas nécessaire de créer un compte
- Enregistrement des scores possibles avec un nom


Une partie spécifique à la création des niveaux de jeu sera aussi crée:
- La création des niveau de jeu se fera via une sous-page "/editor" non indiquée sur le site
- Un mot de passe devra être rentré pour la création des niveaux de jeu


# Executer

Démarrer le site

```sh
npx vite
```

Construire le site en répertoire ./dist

```sh
npx vite build
```

Sert le répertoire ./dist, ou crée une erreur s'il n'existe pas

```sh
npx vite preview
```





