
# Tests

# Test 1 : Le système d'onglet est fonctionnel

Cliquer sur la page de connexion sur les items "Accueil", et "A propos" plusieurs fois. Il faut
vérifier que le contenu de la page change bien, à chaque fois qu'un item est cliqué.

Inutile à cette étape de vérifier le contenu des onglets. Il s'agit plutôt de vérifier que le
processus de gestion des onglets est fonctionnel.

# Test 2 : Vérification du processus d'Inscription

Connectez vous à la base de donnée, et dans la table "REGISTERED_USER" supprimez l'utilisateur
avec votre mail si nécessaire. L'idée est que le logiciel interdit à 2 utilisateurs d'avoir le
même mail.

Essayez de vous connectez après le processus d'inscription. Alors la connexion doit être possible.
Et vous devez voir apparaitre en haut à droite votre pseudo.


# Test 3 : Impossible de se connecter avec un mauvais mot de passe


Essayez de vous connecter avec un mauvais mot de passe. Vérifiez qu'alors la connexion échoue, 
et un message d'erreur d'authentification apparait.

Essayez ensuite de vous connecter avec votre bon mot de passe. La connexion doit alors pouvoir
réussir.

# Test 4 : Vérification du Top Nouveautés et Tendances

En page d'accueil, il est présent un Top Nouveautés et tendance. Le but de ce top est de 
montrer les Visual Novels selon la condition "Visual Novel avec la date de parution la plus 
récente". Condition que l'on va vérifier.

Cliquez sur les 4 Visual Novels du top "Nouveautés et Tendances". Prenez les dates de parution 
de chaque Visual Novel. Ensuite cliquez sur les visuals novel du top "Meilleures évaluations"
qui ne sont pas dans le top Nouveautés et tendances. Vérifiez que tous les visuals novels du top 
"Nouveautés et Tendances" respectent les conditions suivantes:
- Les Visuals Novel du Top Nouveauté et Tendance ont tous une date de parution renseignée
- Les Visuals Novel du Top Nouveauté et Tendance sont paru plus récemment que ceux qui n'y sont pas
- Dans le Top Nouveauté et Tendance, les Visual Novels sont triées en fonction de la date de 
parution. Avec le Visual Novel le plus récent présent en haut à gauche.

# Test 5 : Vérification du Top Meilleurs évaluations

En page d'accueil, il est présent un Top Meilleures Evaluations. Le but de ce top est de montrer
les Visual Novels selon la condition "Visual Novel avec le plus grand pourcentage d'évaluations 
positives". Condition que l'on va vérifier.

Cliquez sur les 6 premiers Visual Novels du top "Meilleures Evaluations". Prenez le pourcentage
d'évaluations positives de chaque Visual Novel. Vérifiez que tous les visuals novels du top "Meilleures 
Evaluations" respectent les conditions suivantes:
- Les Visuals Novel du Top Meilleures Evaluations ont tous un pourcentage d'évaluation positive renseignée
- Les Visuals Novel du Top Nouveauté et Tendance sont paru plus récemment que ceux qui n'y sont pas
- Dans le Top Nouveauté et Tendance, les Visual Novels sont triées en fonction de la date de parution.
Avec le Visual Novel le plus récent présent en haut à gauche.

# Test 6 : Vérification de la vue détail

Cliquez sur un Visual Novel, que cela soit via la page "Accueil" ou la page "Catégorie". Vous devrez
alors normalement rentrer dans une vue Détail, avec plus d'informations sur le Visual Novel considéré.

Vérifiez déjà que cela soit bien le cas, à la fois sur les pages "Accueil", et sur les pages "Catégories".

Ensuite vérifiez sur un Visual Novel que vous avez bien les informations suivantes sur la vue détail:
- Vérifiez la présence à gauche, d'un sommaire / description courte du visual novel. Généralement 5-8 lignes.
- Vérifiez la présence à gauche, de l'image du Visual Novel
- Vérifiez la présence à gauche, de la date de parution du Visual Novel, ou parfois "A déterminer"
- Vérifiez la présence du titre du Visual Novel comme "Lotus Reverie: First Nexus"
- Vérifiez la présence d'une barre de score, sous forme de 5 étoiles
- Vérifiez la présence du pourcentage d'évaluations positives Steam
- Vérifiez la présence du nombre d'évaluations Steam
- Vérifiez la présence d'un descriptif long du Visual Novel. Généralement 30 lignes ou plus.
- Vérifiez que pour la description du Visual Novel, les titres se démarquent bien du texte (Titre en bleu, et gras)

# Test 7 : Possibilité de créer un Visual Novel

Pour ce test-ci il va falloir ce connecter. Une fois connecté, un page "Publication" devrait apparaitre.

Connectez vous à cette page, et dans la barre de texte écrivez le titre d'un Visual Novel comme "Visual test".
Cliquez ensuite sur "Créez page". Remplisez les informations demandées, et cliquez sur Enregistrer.

Vous pouvez vérifier que:
- Si vous appuyez sur "Annuler", aucun visual novel ne soit créé
- Si vous appuyez sur "Enregistrer", un Visual Novel soit bien créé avec les informations renseignées
- Vérifier via le bouton Editer / Crayon que les informations enregistrées sont bien les mêmes que les informations
entrées. N'oubliez pas de vérifier également l'image du Visual Novel, et non pas juste les informations textuelles,
et les dates.

En fin du test, vous voudriez surement supprimer le Visual Novel crée. Pour cela vous allez devoir supprimer celui
ci dans la base de donnée, au niveau de la table "visual_novel". Veuillez notez que les tags sont présents dans
d'autres tables que la table "visual_novel", et vont géner le processus de suppression. Pour éviter ces soucis,
avant de supprimer le Visual Novel test crée, il est conseillé de mettre 100% des tags à false, avant de supprimer
le Visual Novel en base.

# Test 8 : Vérification Comportement Crash Serveur

Un cas à tester, car pouvant arriver, est de savoir ce qu'il se passe lorsque le serveur / l'API est en erreur.
Pour cela, le mieux est de démarrer le serveur en dev, sans avoir démarré l'API en localhost. Il s'agit ensuite
de vérifier:

1. Le message d'erreur est il visible, et compréhensible ? Le but est d'éviter comme j'avais au début un message
de taille très petite, écrit en haut à droite. Et cela s'ajoutais avec les mots "Nouveautés et Tendances",
"Meilleurs évaluations", et un Top qui apparaisait vide sur la page... Donc la page rendait assez mal.

2. Le message apparait il en un temps court ? L'idée est que sans timeout, le message apparait après 13 secondes.
Idéalement, le message devrait apparaitre au bout de 4 secondes maximum. Et mettre un cercle de chargement au
besoin.

3. Passer en vue "smartphone", et vérifier que la présentation du message d'erreur reste correcte en vue smartphone