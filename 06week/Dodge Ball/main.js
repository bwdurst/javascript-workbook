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
class player {
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

  makePlayer() {
    const creatP = new Player(
      
    )
  
    const blueButton = document.createElement("button")
    blueButton.setAttribute('id', 'blueButton')
    blueButton.innerHTML = "Add to Blue Team"
    blueButton.addEventListener('click', function() {new BlueTeammate(playerID)} )
  
    const redButton = document.createElement("button")
    redButton.setAttribute('id', 'redButton')
    redButton.innerHTML = "Add to Red Team"
    redButton.addEventListener('click', function() {new RedTeammate(playerID)} )
  
    playerID.appendChild(blueButton)
    playerID.appendChild(redButton)
  }
  
}

//class constructor for adding players to the blue team
class BlueTeammate {
  constructor(){}
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
    button.addEventListener('click', function() {player.getTraits(playerID)} )
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

//the function that creates a player and adds them to a team
const getTraits = (playerId) => {
  const playerID = document.getElementById(playerId);
  listKeys(newPlayerKeys, playerID);
}

const newPlayerKeys = [
  {throw: 'Can they throw the ball?'},
  {dodge: 'Can they dodge the ball?'},
  {paid: 'Have they paid?'},
  {healthy: 'Are they healthy?'},
  {exp: 'Years of experience?'}];


function listKeys(arr, loc) {
  const personID = loc.length-1;
  for( let i = 0; i < arr.length; i++) {
    var p = document.createElement('input');
    p.setAttribute('id', Object.keys(arr[i]));
    p.setAttribute('placeholder', Object.values(arr[i]));
    loc.appendChild(p);
  }
  
  const addPlayerButton = document.createElement('button')
  addPlayerButton.addEventListener('click', function() {makePlayer(personID)} )
  addPlayerButton.innerHTML = 'Add To Players'
  loc.appendChild(addPlayerButton)
}


