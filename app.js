const team={
  _players:[
    {
      firstName:'jack',
      lastName:'horn',
      age:23
  },
  {
    firstName:'manny',
      lastName:'corn',
      age:23
  },
  {
    firstName:'dan',
      lastName:'lent',
      age:23
  },
  ],
  _games:[
    {
      opponent:'tigers',
      teamPoints:45,
      opponentPoints:55
    },
    {
      opponent:'lions',
      teamPoints:67,
      opponentPoints:47
    },
    {
      opponent:'wolves',
      teamPoints:45,
      opponentPoints:45
    }
  ],
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  addPlayer(newFirstName,newLastName,newAge){
    let player={
      firstName:newFirstName,
      lastName:newLastName,
      age:newAge,
      
    }
    this._players.push(player);
  },
  addGame(newOpponent,newTeamPoints,newOpponentPoints){
    let game={
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints
    }
    this._games.push(game)
  } 
}
team.addPlayer('Bugs','Bunny',76)
console.log(team._players)
team.addGame('jaguars',45,76)
console.log(team._games)
