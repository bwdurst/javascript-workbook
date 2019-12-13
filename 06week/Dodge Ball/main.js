// 'use strict';



// array of available people that can be added as players
const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

//array of people added as players but have not been added to a team
const listOfPlayers = []

//list of players on the blue team
const blueTeam = []

//list of players on the red team
const redTeam = []

//constructor class for adding people to players
class Player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, ishHealthy, yearsExperience) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.ishHealthy = ishHealthy;
    this.yearsExperience = yearsExperience;
  }
}

class Teammate extends Player {
  constructor(player, color) {
    super(player)
      this.id = player.id;
      this.name = player.name;
      this.age = player.age;
      this.skillSet = player.skillSet;
      this.placeBorn = player.placeBorn;
      this.canThrowBall = player.canThrowBall;
      this.canDodgeBall = player.canDodgeBall;
      this.hasPaid = player.hasPaid;
      this.ishHealthy = player.ishHealthy;
      this.yearsExperience = player.yearsExperience;
      this.mascot = color === 'blue' ? 'Ardvark' : 'Platypus';
      this.color = color;
  }
}

const newPlayerKeys = [
  { id: 'PlayerID:' },
  { name: 'Player Name:' },
  { age: 'Player Age:' },
  { skill: 'Skillset:' },
  { born: 'Born in:' },
  { throw: 'Can they throw the ball?' },
  { dodge: 'Can they dodge the ball?' },
  { paid: 'Have they paid?' },
  { healthy: 'Are they healthy?' },
  { exp: 'Years of experience?' },
  { mascot: 'Mascot?' },
  { color: 'Team Color?' }];


function addToTeam(player, playerId, color) {
  var personIndex = listOfPlayers.findIndex(obj => {
    return obj.id === player.id;
  })

  let teammate = new Teammate(player, color);

  color === 'blue' ? blueTeam.push(teammate) : redTeam.push(teammate)
  listOfPlayers.splice(personIndex, 1);

  const toMove = document.getElementById(playerId);
  const target = document.getElementById(color == 'blue' ? 'blue' : 'red');
  const mascot = document.createElement('p');
  const teamColor = document.createElement('p');

  toMove.removeChild(document.getElementById('blueButton'));
  toMove.removeChild(document.getElementById('redButton'));
  mascot.innerHTML = color == 'blue' ? 'Mascot? Ardvark' : 'Mascot: Platypus';
  toMove.appendChild(mascot);
  teamColor.innerHTML = color == 'blue' ? 'Team color? Blue' : 'Team color? Red';

  toMove.appendChild(teamColor);
  target.appendChild(toMove);
}

// when List People button is clicked, this function is called and will display all of the 
// people available to add as players
const listPeopleChoices = () => {
  // initializes the element that will 
  const listElement = document.getElementById('people')
  // for each person in the arrOfPeople array, add a list item, identifying text
  // and a button to add them to players
  arrOfPeople.map(person => {
    var playerID = 'Player' + person.id;
    //create list item variable for person
    const li = document.createElement("li")
    // create make player button
    const button = document.createElement("button")
    // adds Make Player text to button
    button.innerHTML = "Make Player"
    // creates an event listener to run the makePlayer function when the button is pressed
    button.addEventListener('click', function () { makePlayer(person.id) })
    // calls li variable and adds a new HTML element
    li.appendChild(button)
    // adds the text describing the player
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    // adds the list item (person) to the list
    li.setAttribute('id', playerID)
    li.setAttribute('class', 'person')
    listElement.append(li)
  })
  document.getElementById('listPeopleButton').style.display = 'none';
}

function makePlayer(id) {
  var person = arrOfPeople.filter(obj => {
    return obj.id === id;
  });

  var personIndex = arrOfPeople.findIndex(obj => {
    return obj.id === id;
  })

  var person = person[0];

  var playerId = 'Player' + person.id;

  var player = new Player(
    person.id,
    person.name,
    person.age,
    person.skillSet,
    person.placeBorn,
    'Yes',
    'Yes',
    'Yes',
    'Yes',
    5
  )

  listOfPlayers.push(player);
  arrOfPeople.splice(personIndex, 1);

  var element = document.getElementById(playerId);
  element.parentNode.removeChild(element);

  const listElement = document.getElementById('players')

  var playerId = 'Player' + person.id;

  const playerDiv = document.createElement("ul")

  const blueButton = document.createElement("button")
  blueButton.setAttribute('id', 'blueButton')
  blueButton.innerHTML = "Add to Blue Team"
  blueButton.addEventListener('click', function () { addToTeam(player, playerId, 'blue') })

  const redButton = document.createElement("button")
  redButton.setAttribute('id', 'redButton')
  redButton.innerHTML = "Add to Red Team"
  redButton.addEventListener('click', function () { addToTeam(player, playerId, 'red') })

  playerDiv.setAttribute('id', playerId)
  playerDiv.setAttribute('class', 'person')
  playerDiv.appendChild(blueButton)
  playerDiv.appendChild(redButton)
  listElement.append(playerDiv)
  createTraitList(playerDiv, player);
}

function createTraitList(target, player) {
  const playerKeys = Object.keys(player);
  const playerTraits = Object.values(player);
  for (let i = 0; i <= 9; i++) {
    let p = document.createElement('p')
    p.setAttribute('id', `${playerKeys[i]}${playerTraits[0]}`);
    p.setAttribute('class', 'trait');
    p.innerHTML = `${Object.values(newPlayerKeys[i])} ${playerTraits[i]}`
    target.appendChild(p);
  }
}

// function listKeys(arr, loc) {
//   for (let i = 0; i < arr.length; i++) {
//     var p = document.createElement('input');
//     p.setAttribute('id', Object.keys(arr[i]));
//     p.setAttribute('placeholder', Object.values(arr[i]));
//     loc.appendChild(p);
//   }
// }


const assert = require('assert');

//// the function that creates a player and adds them to a team
// const getTraits = (playerId, id) => {
//   const arrPlayer = id-1;
//   const playerID = document.getElementById(playerId);
//   listKeys(newPlayerKeys, playerID);
// }

if (typeof describe === 'function') {

  describe('addToTeam()', () => {
    it('should create a teammate and set mascot', () => {
      const blueGal = new Player(1);
      const blueGuy = new Teammate(blueGal, 'blue');
      assert.equal(blueGuy.mascot, 'Ardvark');
    });

    it('should assign correct team color', () => {
      const redGal = new Player(1);
      const redGuy = new Teammate(redGal,'red');
      assert.equal(redGuy.color, 'red')
    });
  });

  describe('makePlayer()', () => {
    it('should create a player and extend player traits to the object', () => {
      const newGuy = new Player(1, 'Jackson', 91, 'making sushi', 'Rome, Italy', 'Yes', 'Yes', 'Yes', 'Yes', 100)
      assert.equal(newGuy.canThrowBall, 'Yes');
    });
  });
}