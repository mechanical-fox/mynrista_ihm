
# TO DO



NOW 
   -> -- IMPORTANT: Connection avec mon mail yahoo et le mot passe defaut de Itsuki (Swagger) en base de donnée locale ---


Etape 9- Faire la 2ème page "Catégorie". 
    1- Fait: Voir à récupérer les tags + pouvoir les envoyer au niveau de l'edition Screen
    2- Fait: Test les tags en POST et en PUT mais avec l'IHM
    ATTENTION PRESENTATION CATEGORIE reprendre de présentation "Nouveauté et tendances" pour les vignettes.
        Au niveau API -> Les tags sont ajoutés et gérés au niveau API!!
    Faire selection catégorie à gauche, items à droite + pour savoir tags ne PAS faire appel API mais aditioner le tag
        de tous les vn renvoyés
    Mais sur mobile devient selection catégorie en haut. Items en bas.
    


Etape 9 bis- Voir à faire tests unitaire API + compléter tests unitaire IHM histoire de ne pas être pris de court...

Etape 8- Au niveau "A propos" texte à refaire pour en 80% parler ce que fait le site.
           Et seulement en 20 voir 10% dire que cela est un site portfolio...
           Histoire que cela fasse plus pro.
Etape 8 - Taille police d'écriture à réduire dans la page "A propos"
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
Etape 12- NOUVELLE IDEE REMPLACER ERDLINE (Idée modifié) -> 
    RAISON >  L'idée est que Erdline et la documentation API, cela parle à peu de personnes.
    RAISON PAS CREATION VISUAL NOVEL Html mais plus draft > Cela resterai un peu technique à prendre en main...
                                            Et ici cela est plus l'aspect web / interactif qui intèresse

    ATTENTION- Faire un GROS FOCUS sur des tutoriels, des images de présentation...
                Je dirais aussi

    ATTENTION - Pour ce site et Mynrista, réfléchir si plus tard je les mets vraiment sur le net ou pas.
                Quitte à plus tard mettre un message "Attention ce site va être éteint..." plus tard.

    Un site qui aide écriture visual Novel.
    Après beaucoup de réflexion...
    Faire le fait de gérer plus le processus d'écriture que vraiment créer un jeu.
    Genre gérer fiches personnages, description décor... Plus aller dans cette partit que dans la génération
        proprement dite du visual novel. Permettre malgré tout de prévisualiser.
    API > Elle servira tout ce qui est tutoriel / Exemple / Image défaut pour les sprites (je compte en mettre 1/2)
    Voir si je gère TO DO list ou non.
    Proposer de créer le fichier Ren'Py aussi, donc moi aussi apprendre Ren'py.
    Un truc bien serait de faire la gestion de plusieurs langues.

    Gestion avec des fichiers sauvegarde que l'on doit importer / charger.
    Permettre une prévisualisation en navigateur web mais SANS décor.
    Par contre proposer 1/2 sprite. Et juste 1/2 sprite au début. Ceux que j'aurai crée. Eventuellement, mettre ceux de mes
    prochains jeux après.
   
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


