# Thunk Norris

Ce projet réaliser en autonomie durant ma formation développeur fullstack javascript vise à dynamiser un ensemble de composants statiques en implémentant un state Redux et en intégrant une API pour récupérer des blagues Chuck Norris. Le projet comprend plusieurs étapes pour gérer l'affichage des blagues, ainsi que des fonctionnalités supplémentaires comme l'affichage d'un loader lors de la récupération des données.

## Fonctionnalités

### 1. Affichage d'une nouvelle blague au clic sur le bouton

Lorsqu'un utilisateur clique sur le bouton, une nouvelle blague est récupérée depuis l'API publique de Chuck Norris ([documentation ici](https://api.chucknorris.io/)) et affichée dans l'interface.

#### Étapes à suivre :
1. **Stockage de la blague dans le state Redux :**
   - Mise en place du store Redux.
   - Ajout d'une propriété `joke` dans le state, initialisée avec une chaîne de caractères (`One super hilarious joke`).
   - Affichage de la valeur de cet état dans le TSX.

2. **Appel API au clic sur le bouton :**
   - Dans le handler du clic, dispatch d'une action asynchrone (thunk).
   - Dans le thunk, exécution d'une requête vers l'URL `https://api.chucknorris.io/jokes/random`.
   - Mise à jour du state avec la blague reçue via le reducer, en ajoutant un case pour traiter l'action `fulfilled`.

### 2. Affichage d'une blague dès le premier rendu

Dès le chargement initial de la page, une blague est automatiquement affichée dans le composant `Widget`, sans nécessiter de clic préalable de l'utilisateur.

### Bonus : Affichage d'un loader

Pendant que la blague est en cours de récupération depuis l'API, un loader est affiché pour informer l'utilisateur que le contenu est en train de se charger.

#### Étapes à suivre :
1. **Création de l'état de loading dans le state :**
   - Ajout d'un état `isLoading` initialisé à `false`.

2. **Gestion de l'état de loading avant et après la requête :**
   - Modification de l'état `isLoading` à `true` dans le case de l'action `pending`.
   - Réinitialisation de l'état à `false` dans les cases des actions `fulfilled` et `rejected`.

3. **Affichage conditionnel :**
   - Si `isLoading` est `true` : affichage d'un loader ou du texte "joke loading ...".
   - Si `isLoading` est `false` : affichage de la blague.
