
# TO DO

Etape 1: Faire des tutoriels pour apprendre Vue + écrire une synthése
Etape 2: Faire un nav comme en Angular avec "Accueil", "Jeux", "Scores", "A propos"
2 bis: Faire compatible mobile (hors jeux- édition jeux) !!
Etape 3: Creation de jeux sans API au début (un seul niveau de jeu, ou deux).
    Et donc voir à utiliser canva + comment on fait les collisions et tout...
3 bis: Faire compatible mobile (hors jeux- édition jeux) !!
3 bis bis: Rappel OVH peu cher (22/ an) donc faire PAR OVH et non PAS PAR EXPRESS
3 bis bis: Voir un premier déploiement  PAR OVH (J'ai vérifié peu cher en fait 22 par an) + faire un autre projet
nommé "commun_site" pour comment gérer un site en https + faire ATTENTION à quel page est affichée en *cas de 404
serveur (Je dirai réutilise l'icone plot + mettre message en grand en centre fenetre)
Etape 4: Creation API
Etape 5: Creation Editeur
Etape 6: Gestion des scores
6 bis bis: Rappel OVH peu cher (22/ an) donc faire PAR OVH et non PAS PAR EXPRESS
Etape 7: Penser à passer sur genre Java 25 (pom.xml + changer Java / Maven sur mon ordinateur)
Etape 7 bis: Vérifier Vue compatible mobile !!
Etape 7 bis bis: Tests manuels !!
Etape 7 bis bis bis: Ai je bien pensé à pouvoir gérer des environnements dev et prod ? + écrire synthèse Vue gestion des environnements
Etape x: TEST UNITAIRE + écrire synthèse Vue
Etape x: Voir comment avoir % couverture Test + écrire synthèse Vue
Etape 7 bis bis bis: TEST UNITAIRE + faire GitAction + faire merge request + ensuite cela sera juste de la modification de CV
Etape 8: Faire un bon ReadMe + bien indiquer test unitaire, déploiement...
8 bis: Rappel OVH peu cher (22/ an) donc faire PAR OVH et non PAS PAR EXPRESS
Etape 8 bis: Vérifier readMe en comparanat avec mes autres projets
Etape 9: Penser à déployer + à utiliser un certificat https

Pour rappel, mon jeu va avoir une sorte de "grille". L'on aura des arbres, des murs...
Il y a des personnages alliées, et ennemies qui se déplacent automatiquement.
Et le joueur pourra dépenser des points de mécanisme, pour soit par exemple casser un mur (permanent),
faire tourner un pont (non permanent), ouvrir / fermer une porte (non permanent)...

Il y aura différent sortes de personnages, mais en gros au moins archer, soldat de base.
Eventuellement boss à faire.
Eventuellement cavalier à faire.

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





