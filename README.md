
# TO DO

NOW 
   -> -- IMPORTANT: Connection avec mon mail yahoo et le mot passe defaut de Itsuki (Swagger) en base de donnée locale ---



Etape 9 bis- Fait: Ajouter à l'IHM en README les parties "Profils / Environnements" 
Etape 9 bis- Fait: Partie "Déploiement" à écrire. Pour rappel profils ont été faits et testés
Etape 9- Fait: Refaire en README la description du projet car la elle est totalement fausse (ancienne idée inscrite)
Etape 9- Fait: Après déploiement voir à tout supprimer en base + à tout remettre à la main, à cause des soucis d'id
Etape 8- Fait: Au niveau "A propos" texte à refaire pour en 80% parler ce que fait le site.
           Et seulement en 20 voir 10% dire que cela est un site portfolio...
           Histoire que cela fasse plus pro.
Etape 8 - Fait: Taille police d'écriture à réduire dans la page "A propos"


Etape 8 - SUR APRES REFLEXION, et voir ma synthese java sur ce qu'il faut tester. Je pense chercher à résoudre en 8 
secondes les cas "Meilleur affichage message si serveur down quand on arrive -> Gérer UNIQUEMENT lors de la 1er
connection, et non à chaque page" + Si serveur down, afficher cela en 3 ou 4 secondes (je pense tester timeout de 
fetch voir si marche - et sinon juste utiliser 2 fonctions en asynchrone) (Aussi, utiliser une url "health" censé
répondre rapidement, genre soit swagger actuellement, soit url de base tous les vn si elle répond vite... cela 
semble être le cas).


Etape 9- relancer les tests unitaire après les modifications dites auparavant. Voir si le % de couverture est encore bon ou non.
Etape 10- Déployer + tester IHM une fois déployé. Tester entre autre édition (mais pas création) de visual novel.
Tester aussi l'inscription, en me supprimant de la base de donnée à la main. Il s'agit de 2 fonctionnalités importantes.
Etape 10- Faire Merge + texte merge request + tag + release + vérifier à chaque fois (1 merge, 1 push sur main) que la Github Action
est bien passée
Etape 10 - Site portfolio juste après après reflexion voir à mettre site ET backend. Et cela car l'on va surement me demander 
    de prouver mon expertise back-end et tout. (Rappel: Partie Note > Emploi j'ai déjà mis de bien mettre sur CV que j'ai fait 
    2 sites, et aussi 2 API) 
Etape 11 - Les trucs en bas à dégager dans un fichier spécifique + supprimer le TODO



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

Ce projet contient le code de la partie frontend / graphique, du site Mynrista. Le site mynrista permet
d'ajouter, et de consulter les informations sur différents visual novel. Tels que le sommaire du visual
novel, sa date de parution, son pourcentage d'évaluation positives (Steam), ...

Les fonctionnalités actuelles sont les suivantes:

- Création de compte
- Création de Pages de présentation de Visual Novel
- Affichage des Visual Novels par top "Nouveautés et Tendances"
- Affichage des Visual Novels par top "Meilleurs Evaluations"
- Affichage des Visual Novels par tags / catégories


# Tests unitaires

Les tests unitaires du projet peuvent être lancés avec la commande suivante.

```sh
npm run test
```

Un rapport html sur la couverture de test est alors généré à "coverage/index.html".
En cas de couverture de test insuffisante, un message warning sera affiché.


# Executer

Installez tout d'abord les dépendances du projet avec

```sh
npm install
```

Vous pouvez ensuite démarrer le site internet avec

```sh
npm run serve
```

Vous pourrez alors vous connecter à l'adresse 

http://localhost:5173


# Descriptions, et Titres 

Le site Mynrista permet de rentrer des descriptions, pour les Visual Novels. Si vous parcourez le site
officiel, vous pouvez vous rendre compte que les descriptions peuvent comporter des titres de sections. 
La façon de renseigner un titre de section est d'écrire " # Titre " dans le champ description d'un visual
novel.

Si vous souhaitez améliorer l'affichage des descriptions, le formatage est réalisé dans le composant 
Description.vue, à la fonction translateDescription(text).


# Profils / Environnements

Ce projet dispose de deux profils, "development" et "production". Par défaut, exécuter npx vite
utilisera le profil "development". Et exécuter npx vite build utilisera l'environnement "production".

**Profil development:** Utilisation d'une API localhost\
**Profil production:** Utilisation de l'API de production

Vous pouvez spécifier un autre profil avec l'option --mode

```sh
npx vite --mode production
```

Les configurations utilisées sont décrites dans les fichiers suivants

[src/env/.env.development](./src/env/.env.development)\
[src/env/.env.production](./src/env/.env.production)



# Déploiement    


Un site internet se déploie en plaçant dans un répertoire spécifique d'un serveur web les 
fichiers html, css, et javascript, correspondant à notre site internet. L'on parle généralement
de répertoire dist.

Pour construire le répertoire ./dist

```sh
npm install
npm run build
```

Une fois le répertoire ./dist crée, vous pouvez vérifier le rendu du site internet en servant
ce répertoire via la commande suivante

```sh
npm run preview
```



# Documentation

Afin de faciliter les mises à jours futures du projet, un peu de documentation est prévue. Il s'agit
pour l'instant d'une liste de tests manuels, ainsi que de plusieurs idées d'améliorations.

**Tests Manuels:** [doc/tests.md](./doc/tests.md)\
**Idées d'améliorations:** [doc/amelioration_ideas.md](./doc/amelioration_idea.md)

