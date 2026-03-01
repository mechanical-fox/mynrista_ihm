
# TO DO

NOW 
   -> -- IMPORTANT: Connection avec mon mail yahoo et le mot passe defaut de Itsuki (Swagger) en base de donnée locale ---


Etape 9 - Fait: Gérer cas si serveur down (Message clair, timeout court)
Etape 9- Fait: Relancer les tests unitaire après les modifications dites auparavant.

Etape 10- Déployer + tester IHM une fois déployé. Tester entre autre édition (mais pas création) de visual novel.
Tester aussi l'inscription, en me supprimant de la base de donnée à la main. Il s'agit de 2 fonctionnalités importantes.
Etape 10- Faire Merge + texte merge request + tag + release + vérifier à chaque fois (1 merge, 1 push sur main) que la 
Github Action est bien passée
Etape 10 - Site portfolio juste après après reflexion voir à mettre site ET backend donc Swagger. Et cela car l'on va
    surement me demander de prouver mon expertise back-end et tout. (Rappel: Partie Note > Emploi j'ai déjà mis de bien
    mettre sur CV que j'ai fait 2 sites, et aussi 2 API) 
Etape 11 - supprimer le TODO




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

