
# TO DO



NOW 
   -> -- IMPORTANT: Connection avec mon mail yahoo et le mot passe defaut de Itsuki (Swagger) en base de donnée locale ---




Etape 9- Faire la 2ème page "Catégorie". 
    ATTENTION PRESENTATION reprendre présentation "Nouveauté et tendances" pour les vignettes.
    Faire selection catégorie à gauche, items à droite.
    Mais sur mobile devient selection catégorie en haut. Items en bas.
    Au niveau édition faire avec des checkbox. 


Etape 9 bis- Voir à faire tests unitaire API + compléter tests unitaire IHM histoire de ne pas être pris de court...


ETape 8 - Tests unitaires finaux + cela comprend API aussi
Etape 8- Github Action ajouter les tests unitaires
Etape 9 - faire les environnement dev et prod en API
Etape 10 - faire les environnement dev et prod en IHM
Etape 9- Refaire en README la description du projet car la elle est totalement fausse (ancienne idée inscrite)
Etape 9- Penser à mettre serveur https PROD + tester en local en config prod avant de déployer L'INSCRIPTION
         car avec le port 443 et tout, je ne sais pas si cela marchera
Etape 10- Déployer + tester une fois déployé
Etape 10 bis- Modifier page about pour dire "Mynrista est un site dédié à la découverte, et à la présentation de visual novel... Vous pouvez actuellement
    ..." puis finir sur un "Site crée par Pierre Meunier (Développeur). Site crée avec les technologies..." + mettre en début un message 
    "Ce site est actuellement en début de développement, et sera amené à évoluer dans le futur".
Etape 11- Dans le about BIEN PRECISE que les scores sont repris de Steam partit "..."

Etape 10- IDEE aussi faire un site présentation "Tora Lockfire" et cela SANS ma photo après. Expliquer mon parcours, montrer mes projets
    de jeu... L'idée est que cela va me permettre avec Mynrista + erdline de montrer ce que je sais faire. Et ce site présentation Tora Lockfire 
    sera surement plus jolie que Erdline.
Etape 11- IDEE Suite à ma nouvelle idée "Si soucis voir freelance - montrer des sites PRO", alors ne PAS voir à faire de projet tests auto.
    Directement embrayer sur mon moteur Visual Novel basique + après sur améliorer MYNRISTA.
Etape 12- NOUVELLE IDEE REMPLACER ERDLINE -> 
    Un site qui permet créer Visual Novel depuis Internet.
    Avec le PRIVILEGIER VOIR EN NAVIGATEUR VITE (Pas juste voir au téléchargement) --> cause recruteur
    et le PEU DE FORMULAIRE  --> cause recruteur
    et FAIRE UNE PAGE TUTORIEL AVEC DES IMAGES
    et PERMETTRE CHARGER UN EXEMPLE
    Il me faudra avoir fini légèrement plus mon visual 
    Mais après, celui ci est en cours.
    Et comme Drawio l'on fait sans compte, mais l'utilisateur peut télécharger et upload des fichiers.
    L'idée est que Erdline et la documentation API, cela parle à peu de personnes.
Etape 13- IDEE qui remplace erdline en REPRENDRE PROJET GITHUB et aussi NOM DOMAINE pour faire des économies au niveau nom de domaine.



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

# Tests unitaires

Les tests unitaires du projet peuvent être lancés avec la commande suivante.

```sh
npm run test
```

Un rapport html sur la couverture de test est alors généré à "coverage/index.html".
En cas de couverture de test insuffisante, un message warning sera affiché.

# Executer

Démarrer le site

```sh
npm run serve
```

Construire le site en répertoire ./dist

```sh
npm run build
```

Sert le répertoire ./dist, ou crée une erreur s'il n'existe pas

```sh
npm run preview
```


# Idées d'amélioration


Des idées d'améliorations futures sont prévues, afin de faciliter le processus d'évolution du site.\
Ces idées d'améliorations peuvent être trouvées dans le fichier suivant.


[/doc/amelioration_idea](./doc/amelioration_idea.md)


# Descriptions, et Titres 

Le site Mynrista permet de rentrer des descriptions, pour les Visual Novels. Si vous parcourez le site
officiel, vous pouvez  vous rendre compte que les descriptions peuvent comporter des titres de sections. 
La façon de renseigner un titre de section est d'écrire " # Titre " dans le champ description d'un visual
novel.

Si vous souhaitez améliorer l'affichage des descriptions, le formatage est réalisé dans le composant 
Description.vue, à la fonction translateDescription(text).


