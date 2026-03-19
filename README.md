

# TO DO

pour image:
   

- Fait: Vue welcome
- Fait: Vue catégorie les tags qui dépassent
- Connexion et inscription les tailles des champs input
- Supprimer partie TO Do

# Projet

Ce projet contient le code de la partie frontend / graphique, du site Mynrista. Le site mynrista permet
d'ajouter, et de consulter les informations sur différents visual novel. Tels que le sommaire du visual
novel, sa date de parution, son pourcentage d'évaluations positives (Steam), ...

Les fonctionnalités actuelles sont les suivantes:

- Création de compte
- Création de Pages de présentation de Visual Novel
- Affichage des Visual Novels par top "Nouveautés et Tendances"
- Affichage des Visual Novels par top "Meilleurs Evaluations"
- Affichage des Visual Novels par tags / catégories


# Tests unitaires


Vous pouvez lancer les tests unitaire, puis vérifier le taux de coverage avec la commande suivante. 
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

**Profil development:** Utilisation d'une API localhost\
**Profil production:** Utilisation de l'API Production

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

