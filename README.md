
# TO DO


NOW -> Je suis à debug de pourquoi je n'arrive pas à créer de compte.
       Et après l'on pourra passer à l'url de connexion !!

NOW -> Je suis à gérer la connexion (Api + après en graphique mettre juste photo nom - et plus tard photo et nom)
    -> Ensuite faire les tests unitaire en IHM !! Car ceux-ci m'ont l'air compliqués / long

ATTENTION Verifier que durant inscription j'envoie les mails avec
   mynrista, et non pas erdline...
Refaire en README la description du projet

Verifie Vue Compatible Mobile
Acheter OVH mynrista.fr car en fait juste 22/an + achat nom API
registration-mynrista.fr ou registration.mynrista.fr (nom pour le lien) + acheter SANS adresse mail 
(qui sera mynrista.com) et ATTENTION en .fr car... je ferais peut être le 
site en francais afin que les recruteurs puissent comprendre
Faire environnement dev et prod
Faire Test Unitaire
Indiquer comment avoir % couverture

Etape 1 - Fait: Création Page d'inscription
Etape 2- Gérer les pseudos déjà existant, email existant, mot passe vide, mot passe mal répété.
         Mon idée pseudo et email serait une API qui envoit un objet avec "accepte/non accepté + raison" et renvoit 200
         même si soucis. Et on appelle cette API uniquement à la création, inutile de vérifier en temps réel.
         Surtout pour le mail. Pseudo à la limite pour une API professionnelle...
Etape 3- Gérer validation via mail si non fait avant + utiliser adresse mynrista... comme j'en dispose 
         actuellement
Etape 4- Gérer si connecter, mettre photo du profil, pseudo et bouton déconnection
Etape 4 bis - Commencer à faire les premiers tests unitaires... d'autant que en Vue, je ne sais pas comment
         cela marche + écrire synthèse comment faire tests Vue.
Etape 3-  Permettre d'ajouter des Visual Novel en créeant les pages nécessaires.
Etape 4 - Faire les listes hyper-jolies voir en bas !!

FIRST

Voir comment envoyer mail depuis mon API en java + écrire code quelque part + utiliser erdline.fr pour cela

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





