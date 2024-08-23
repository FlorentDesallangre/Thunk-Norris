# Exo Thunk Norris

Ce projet vise à dynamiser un ensemble de composants statiques en implémentant un state Redux et en intégrant une API pour récupérer des blagues Chuck Norris. Il comprend plusieurs fonctionnalités pour gérer l'affichage des blagues et un loader pendant la récupération des données.

## Fonctionnalités

### 1. Affichage d'une nouvelle blague au clic sur le bouton

Lorsqu'un utilisateur clique sur le bouton, une nouvelle blague est récupérée depuis l'API publique de Chuck Norris ([documentation ici](https://api.chucknorris.io/)) et affichée dans l'interface.

### 2. Affichage d'une blague dès le premier rendu

Dès le chargement initial de la page, une blague est automatiquement affichée dans le composant `Widget`, sans nécessiter de clic préalable de l'utilisateur.

### 3. Affichage d'un loader

Pendant que la blague est en cours de récupération depuis l'API, un loader est affiché pour informer l'utilisateur que le contenu est en train de se charger.

## Technologies utilisées

- **React** : Utilisé pour construire l'interface utilisateur avec des composants réutilisables.
- **Redux** : Implémenté pour gérer l'état global de l'application, y compris le stockage des blagues et l'état de chargement.
- **Redux Thunk** : Utilisé pour effectuer des actions asynchrones, telles que l'appel à l'API Chuck Norris.
- **API Fetch** : Utilisée pour récupérer des données depuis l'API Chuck Norris.
- **JavaScript** : Langage principal utilisé pour le développement de l'application.
- **HTML & CSS** : Pour structurer et styliser l'interface utilisateur.
