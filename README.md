# 🏈 Team Manager (JavaScript Object Project)

## 📘 Overview
This project defines a JavaScript object named `team` that helps manage a sports team's players and games. It demonstrates object-oriented programming principles like encapsulation, getters, and methods.

---

## 🧱 Object Structure

```js
const team = {
  _players: [ { firstName, lastName, age }, ... ],
  _games: [ { opponent, teamPoints, opponentPoints }, ... ],

  get players() { ... },
  get games() { ... },

  addPlayer(newFirstName, newLastName, newAge) { ... },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) { ... }
};
```

---

## ⚙️ Features

- Store and manage a list of players and their details
- Keep track of game results
- Add new players dynamically with `.addPlayer()`
- Add new games dynamically with `.addGame()`
- Access player and game data using getters

---

## 🚀 Usage Example

```js
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('jaguars', 45, 76);
console.log(team.games);
```

---

## 📦 Sample Data

### Players
```js
[
  { firstName: 'jack', lastName: 'horn', age: 23 },
  { firstName: 'manny', lastName: 'corn', age: 23 },
  { firstName: 'dan', lastName: 'lent', age: 23 }
]
```

### Games
```js
[
  { opponent: 'tigers', teamPoints: 45, opponentPoints: 55 },
  { opponent: 'lions', teamPoints: 67, opponentPoints: 47 },
  { opponent: 'wolves', teamPoints: 45, opponentPoints: 45 }
]
```

---

## 🧠 Learning Concepts

- JavaScript object structure
- Getter methods for controlled access
- Method creation within objects
- Array manipulation with `.push()`

---
