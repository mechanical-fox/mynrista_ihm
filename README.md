
# TO DO



NOW 
   -> -- IMPORTANT: Connection avec mon mail yahoo et le mot passe defaut de Itsuki (Swagger) en base de donnée locale ---
    -> Ensuite faire les tests unitaire en IHM !! Car ceux-ci m'ont l'air compliqués / long


Refaire en README la description du projet car la elle est totalement fausse.
Il s'agissait de mon ancienne idée.

Verifie Vue Compatible Mobile
 
site en francais afin que les recruteurs puissent comprendre
Faire environnement dev et prod

Etape 8 - Fait - Gérer la modification
Etape 8 bis - Fait - Pour l'écran Création / Modification faire un bouton "annuler"
Etape 9- Fait - Faire des tests manuels avec "création" "edit" et "annuler" pour les visuals novels
Etape 10- Fait -  Remplir la page de donnée avec 8-10 Visual Novel
Etape 9 - Fait: ReleaseDate est maintenant fonctionnelle
Etape 9- Fait - Faire Présentation 1er page "Nouveautés et tendances (Selon Date Release)". 

Etape 9- Faire que pour le 2ème top, si Visual = selectionner elle ne grandit pas (ce qui est dur à gérer - j'ai vu via Steam et Royal Road
   qui ne font pas cela) mais plutôt faire un effet comme titre souligné, ou qui change de couleur
   
Etape 9 - Après faire une liste "Meilleur Evaluations(selon note)" et s'aider présentation Royal Road de "Rising Star".
     Elements à mettre - titre, score, date.
     Ce qui a été fait --> Score ajouté en database + j'ai objet "ScoreBar"
     Reste à faire ->    Gérer infobulle DYNAMIQUE donc création style (créer une balise style dédié dans index.Html avec un certain id) +  
                        +  infobulle ne doit apparraitre QUE si j'ai mit le paramètre html de l'afficher car en top on n'affiche pas mais en détail on affiche  +
                        le top via API et via IHM après + info bulle doit être "... % évaluation positives sur Steam, sur ... évaluation"
     Attention -> Eh bien j'ai un 2ème top à faire + page catégorie + vue détail + test unitaire... Je crois que cela va être un peu long.
Etape 9- Ajouter en base de donnée "Love Notes", "Guilty Parade" (Image ok)
Etape 9 bis- Faire la page d'affichage / présentation des visuals novels lorsque l'on à cliqué dessus
Etape 9- Créer une 2ème page + Faire une présentation de la 2ème page "Catégorie" mais PAS CATEGORIE donc cela necessitera d'avoir ajouté les genres
        Niveau présentation juste faire des Visuals Novels de haut en Bas. Faire un peu différent de ma "Publication"
        car il faudra ajouter les genres en gris par exemple. Ou la date de release. Ce genre de chose.

ETape 9 - Euh... ne pas oublier de gérer le fait que si clic = renvoyer vers la page détail.
            Vérifier pour les DEUX top.


Etape 9 bis- Voir à faire tests unitaire API + compléter tests unitaire IHM histoire de ne pas être pris de court...

Etape 10- Mettre un peu plus de paramètres en publication : Idées sont déjà Tags. Date publication.
            Cela servira pour les listes en plus. Après ajouter des notes, mais cela par les utilisateurs.
Etape 11 - Faire un système de Page en publishing... Sinon à plus de 5 Visual Novel il va y avoir un soucis.
           Niveau API toujours demander 100 % des Visual Novel ou pas ? Possible je pense.
           Mais pages au moins au niveau graphique.
Etape 12- Au niveau étape "publication" la vue mobile n'est pas gérée. Donc faire cela rapidement je pense. 
Etape 13- Faire pour la description la possibilité d'ajouter des titres avec "# titre". Et faire un bouton preview.       


Etape 7- Faire écran avec liste pour choisir visual novel à modifier pour permettre la modification de ce qui a déjà été ajouté +
           renvoie à la même page que a la création

Etape 6-  Permettre d'ajouter des Visual Novel en créeant les pages nécessaires.
Etape 7 - Faire les listes hyper-jolies voir en bas !!
ETape 8 - Tests unitaires finaux + cela comprend API aussi
Etape 9 - Les trucs mis en bas... je crois que j'ai du README et tout
Etape 10- Déployer + tester une fois déployé
Etape 10- IDEE aussi faire un site présentation "Tora Lockfire" et cela SANS ma photo après. Expliquer mon parcours, montrer mes projets
        de jeu... L'idée est que cela va me permettre avec Mynrista + erdline de montrer ce que je sais faire. Et ce site présentation Tora Lockfire 
        sera surement plus jolie que Erdline.
Etape 10 bis- Modifier page about pour dire "Mynrista est un site dédié à la découverte, et à la présentation de visual novel... Vous pouvez actuellement
        ..." puis finir sur un "Site crée par Pierre Meunier (Développeur). Site crée avec les technologies..." + mettre en début un message 
        "Ce site est actuellement en début de développement, et sera amené à évoluer dans le futur".
Etape 11- Dans le about BIEN PRECISE que les scores sont repris de Steam partit "..."
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


PRESENTATION TROUVEE

En haut La Barre façon Steam --> Couleur Noir ou Bleu foncée, Nom  + les boutons avec Accueil + A Propos Juste
En bas-> Faire un fond coloré comme Steam. Pour cela changer la couleur du body.
1- Avertisement qu'il s'agit d'un site vitrine
2- Une liste. S'inspirer de la façon Steam de montrer les sites "tableaux"
    Faire aussi le fait de faire un changement de couleur au survol. 
3- Hum changement... En fait en haut faire "Dernière sorties", montrer juste un item avec texte à côté comme
Steam. Et faire une fléche pour switcher à gauche ou droite. La fleche n'apparait que si Et après l'on boucle.
4- Et donc deuxième liste. Un titre, explorer. Et après cela est juste 100% des Visuals Novels car il y en a 
peu. Et la l'information sera plus synthétique. Juste Image, Genre. Un peu plus comme ce que j'avais fait sur mobile.
5- Et en idée d'amélioration. Pour ceux qui ont un compte permet de faire une liste favoris
6- Et aussi permettre pour tout le monde de trier par catégorie. Comme "Aventure", "Fantasy"...
7- Permettre une recherche Fuzzy avec une barre de recherche serait cool aussi. AU pire, mettre en idée d'amélioration.
8- Si je fais pleins de listes... voir avant à tester les tests unitaires façon Vue. Comme je sais que je suis
un peu timé, et que cela sera une partie longue.
9- Github Action ajouter les tests unitaires... comme maintenant je les aient

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

ATTENTION TEST - Prevoir un test avec serveur en https à cause de ...
nécessité de vérifier si email marche avec port 443

INDIQUER EN TEST manuel - Verification envoie email inscription... Avec les ports qui changent entre dev et prod et tout,
juste à cause des emails et des liens en email,cela semble un peu compliqué...

Faire Compatible mobile.
ATTENTION traduire toutes les présentations en francais. Car je vais faire du ".fr", et aussi pour que les recruteurs
ou mes amis si je montre comprennent.
HYPER IMP après reflexion mettre genre 10 Visual Novels quitte à avoir quelques rubriques vides. Prendre 100% les informations
de Steams. L'idée est que vraiment, la présentation va être regardée par les recruteurs, donc...
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




