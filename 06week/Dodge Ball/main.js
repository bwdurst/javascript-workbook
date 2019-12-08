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
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, 
    canDodgeBall, hasPaid, ishHealthy, yearsExperience) {
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
    this.mascot = "";
    this.color = "";
  }
}

const newPlayerKeys = [
  {id: 'PlayerID:'},
  {name: 'Player Name:'},
  {age: 'Player Age:'},
  {skill: 'Skillset:'},
  {born: 'Born in:'},
  {throw: 'Can they throw the ball?'},
  {dodge: 'Can they dodge the ball?'},
  {paid: 'Have they paid?'},
  {healthy: 'Are they healthy?'},
  {exp: 'Years of experience?'},
  {mascot: 'Mascot?'},
  {color: 'Team Color?'}];


function addToBlueTeam(player, playerId) {
  player.mascot = 'Ardvark';
  player.color = 'Blue';

  const toMove = document.getElementById(playerId);
  const target = document.getElementById('blue');
  const mascot = document.getElementById('mascot' + player.id)
  const color = document.getElementById('color' + player.id)

  console.log(toMove);
  console.log(target);

  var personIndex = listOfPlayers.findIndex(obj => {
    return obj.id === player.id;
  })

  mascot.innerHTML = 'Mascot? Ardvark'
  color.innerHTML = 'Team color? Blue'
  target.appendChild(toMove)
  blueTeam.push(player);
  redTeam.splice(personIndex, 1);
  listOfPlayers.splice(personIndex, 1);
}

//class constructor for adding players to the red team
function addToRedTeam(player, playerId) {
  player.mascot = 'Platypus';
  player.color = 'Red';

  const toMove = document.getElementById(playerId);
  const target = document.getElementById('red');
  const mascot = document.getElementById('mascot' + player.id)
  const color = document.getElementById('color' + player.id)

  var personIndex = listOfPlayers.findIndex(obj => {
    return obj.id === player.id;
  })

  mascot.innerHTML = 'Mascot? Platypus'
  color.innerHTML = 'Team color? Red'
  target.appendChild(toMove)
  redTeam.push(player);
  blueTeam.splice(personIndex, 1);
  listOfPlayers.splice(personIndex, 1);
}

// when List People button is clicked, this function is called and will display all of the 
// people available to add as players
const listPeopleChoices = () => {
  document.getElementById('listPeopleButton').style.visibility = 'hidden';
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
    button.addEventListener('click', function() {makePlayer(person.id)} )
    // calls li variable and adds a new HTML element
    li.appendChild(button)
    // adds the text describing the player
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    // adds the list item (person) to the list
    li.setAttribute('id', playerID)
    li.setAttribute('class', 'person')
    listElement.append(li)
  })
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

  var element = document.getElementById(playerId);
  element.parentNode.removeChild(element);
  listOfPlayers.push(player);
  arrOfPeople.splice(personIndex, 1);

  const listElement = document.getElementById('players')

  var playerId = 'Player' + person.id;

  const playerDiv = document.createElement("ul")
  const p = document.createElement("p");

  const blueButton = document.createElement("button")
  blueButton.setAttribute('id', 'blueButton')
  blueButton.innerHTML = "Add to Blue Team"
  blueButton.addEventListener('click', function() {addToBlueTeam(player, playerId)} )

  const redButton = document.createElement("button")
  redButton.setAttribute('id', 'redButton')
  redButton.innerHTML = "Add to Red Team"
  redButton.addEventListener('click', function() {addToRedTeam(player, playerId)} )

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
  console.log(playerTraits);
  for (i = 0; i <= 11; i++) {
    let p = document.createElement('p')
    p.setAttribute('id', `${playerKeys[i]}${playerTraits[0]}`);
    p.setAttribute('class', 'trait');
    p.innerHTML = `${Object.values(newPlayerKeys[i])} ${playerTraits[i]}`
    target.appendChild(p);
  }
}

// the function that creates a player and adds them to a team
// const getTraits = (playerId, id) => {
//   const arrPlayer = id-1;
//   const playerID = document.getElementById(playerId);
//   listKeys(newPlayerKeys, playerID);
// }



function listKeys(arr, loc) {
  const personId = loc.length-1;
  for( let i = 0; i < arr.length; i++) {
    var p = document.createElement('input');
    p.setAttribute('id', Object.keys(arr[i]));
    p.setAttribute('placeholder', Object.values(arr[i]));
    loc.appendChild(p);
  }
}