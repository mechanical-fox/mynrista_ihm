
# TO DO

-> Fait: Passer en port 8082 (new_erdline utilise 8081) sur API + sur configuration IHM
-> Fait: En API modifier pour ne PLUS avoir vérification Link + l'autre truc + plus de vérification en API

-> Fait: Vérifier que cela a été détruit dans la base de donnée avec DBeaver

-> Fait: En IHM faire processus inscription et connection automatique
-> Fait: TOUT RETESTER, juste top / visualiser / un seul élément d'édition, pour vérifier que ce que j'ai push fonctionne

-> Fait: Faire new branch + changement numéro version +  merge + ... + changement de la base mynrista en PROJET GITHUB 
pour avoir les 2 colonnes en moins + ne pas oublier de faire un nouveau tag et une nouvelle release

-> Fait et testé par image docker prod: Et mince... à voir mais je risque d'avoir le soucis pour l'API en production 
rapport à host.docker.internal:host-gateway, bref là j'ai modifié le README et la configuration. Cela devrait suffire. 
Au niveau configuration, cela était la base de donnée qui changeait d'adresse juste


-> Fait: Vérifier tests unitaires IHM
-> Fait: Vérifier tests unitaires API

-> Fait:Vérifier et Modifier README en API + AUSSI fichiers documentations
-> Fait: Vérifier et Modifier README en IHM + AUSSI fichiers documentation

-> Fait: API Vérifier 100% des commandes indiquées en README et cela DONT les commandes docker
-> API Changer numéro de version
-> API Vérifier si les tests unitaires passent + si ceux-ci passent toujours après le merge
-> API faire tag + release après le merge


-> Fait: IHM Vérifier 100% des commandes indiquées en README et cela DONT les commandes docker
-> Fait: Vérifier en dossier doc "amelioration_idea.md" et "tests.md"
-> IHM Changer numéro de version
-> IHM Vérifier si les tests unitaires passent + si ceux-ci passent toujours après le merge
-> IHM faire tag + release après le merge

-> Supprimer ce to do


# Projet

Ce projet contient le code de la partie frontend / graphique, du site Mynrista. Le site mynrista permet
d'ajouter, et de consulter les informations sur différents visual novel. Telles que le sommaire du visual
novel, sa date de parution, son pourcentage d'évaluations positives (Steam), ...

Les fonctionnalités actuelles sont les suivantes:

- Création de compte
- Création de pages de présentation de Visual Novel
- Affichage des Visual Novels par top "Nouveautés et Tendances"
- Affichage des Visual Novels par top "Meilleurs Evaluations"
- Affichage des Visual Novels par tags / catégories


# Tests unitaires


Vous pouvez lancer les tests unitaires, puis vérifier le taux de coverage avec la commande suivante. 
Cette commande est configurée pour échouer si le taux de couverture de test est insufissant.

```sh
npx vitest run --coverage
```

Après les tests, un rapport html avec la couverture de test sera alors crée à l'emplacement suivant

**coverage/index.html**


# Executer

Installez tout d'abord les dépendances du projet avec

```sh
npm install
```

Vous pouvez ensuite démarrer le site internet avec

```sh
npx vite
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

Ce projet dispose de deux profils, development et production. Par défaut, exécuter npx vite
utilisera le profil development. Et exécuter npx vite build utilisera l'environnement production.

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
npx vite build
```

Une fois le répertoire ./dist crée, vous pouvez vérifier le rendu du site internet en servant
ce répertoire via la commande suivante

```sh
npx vite preview
```



# Documentation

Afin de faciliter les mises à jours futures du projet, un peu de documentation est prévue. Il s'agit
pour l'instant d'une liste de tests manuels, ainsi que de plusieurs idées d'améliorations.

**Tests Manuels:** [doc/tests.md](./doc/tests.md)\
**Idées d'améliorations:** [doc/amelioration_ideas.md](./doc/amelioration_idea.md)

