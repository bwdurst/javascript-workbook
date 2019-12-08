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

//class constructor for adding players to the blue team
// class BlueTeammate extends Player {
//   constructor(name) {
//     super(name);
//     this.mascot = 'Ardvark'
//     this.color = 'blue'
//   }
// }

function addToBlueTeam(player, playerId) {
  player.mascot = 'Ardvark';
  player.color = 'Blue';


  var toMove = document.getElementById(playerId);
  var target = document.getElementById('blue');

  console.log(toMove);
  console.log(target);

  var personIndex = listOfPlayers.findIndex(obj => {
    return obj.id === player.id;
  })

  // var element = document.getElementById(playerId);
  // element.parentNode.removeChild(element);
  toMove.appendChild(target)
  blueTeam.push(player);
  listOfPlayers.splice(personIndex, 1);
}

//class constructor for adding players to the red team
class RedTeammate {
  constructor(){}
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
    person.placeBorn
  )

  var element = document.getElementById(playerId);
  element.parentNode.removeChild(element);
  listOfPlayers.push(player);
  arrOfPeople.splice(personIndex, 1);

  const listElement = document.getElementById('players')

  var playerId = 'Player' + person.id;

  const li = document.createElement("li")

  const blueButton = document.createElement("button")
  blueButton.setAttribute('id', 'blueButton')
  blueButton.innerHTML = "Add to Blue Team"
  blueButton.addEventListener('click', function() {addToBlueTeam(player, playerId)} )

  const redButton = document.createElement("button")
  redButton.setAttribute('id', 'redButton')
  redButton.innerHTML = "Add to Red Team"
  redButton.addEventListener('click', function() {new RedTeammate(id)} )


  li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
  li.setAttribute('id', playerId)
  li.setAttribute('class', 'person')
  li.appendChild(blueButton)
  li.appendChild(redButton)
  listElement.append(li)
}

  // const blueButton = document.createElement("button")
  // blueButton.setAttribute('id', 'blueButton')
  // blueButton.innerHTML = "Add to Blue Team"
  // blueButton.addEventListener('click', function() {new BlueTeammate(playerID)} )

  // const redButton = document.createElement("button")
  // redButton.setAttribute('id', 'redButton')
  // redButton.innerHTML = "Add to Red Team"
  // redButton.addEventListener('click', function() {new RedTeammate(playerID)} )

  // playerID.appendChild(blueButton)
  // playerID.appendChild(redButton)
// }

//the function that creates a player and adds them to a team
// const getTraits = (playerId, id) => {
//   const arrPlayer = id-1;
//   const playerID = document.getElementById(playerId);
//   listKeys(newPlayerKeys, playerID);
// }

// const newPlayerKeys = [
//   {throw: 'Can they throw the ball?'},
//   {dodge: 'Can they dodge the ball?'},
//   {paid: 'Have they paid?'},
//   {healthy: 'Are they healthy?'},
//   {exp: 'Years of experience?'}];


// function listKeys(arr, loc) {
//   const personId = loc.length-1;
//   console.log(loc);
//   for( let i = 0; i < arr.length; i++) {
//     var p = document.createElement('input');
//     p.setAttribute('id', Object.keys(arr[i]));
//     p.setAttribute('placeholder', Object.values(arr[i]));
//     loc.appendChild(p);
//   }
  
//   const addPlayerButton = document.createElement('button')
//   addPlayerButton.addEventListener('click', function() {makePlayer(personId)} )
//   addPlayerButton.innerHTML = 'Add To Players'
//   loc.appendChild(addPlayerButton)
// }


