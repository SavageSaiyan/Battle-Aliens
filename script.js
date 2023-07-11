// create ship class and give it health attack
class ship {
  constructor(hull, firepower, accuracy, name) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.name = name;
  }

  // create function that has ussAssembly ship fight through the array of enemy alien ships
  shipFight(othership) {
    if (this.hull <= 0 || othership.hull <= 0) return;

    console.log(`${this.name} attacked ${othership.name}`);
    if (Math.random() < this.accuracy) {
      console.log(`${othership.name} got hit!`);
      // write code that makes uss Assembly ship attack alienship
      othership.hull -= this.firepower;
    } else {
      console.log(`${this.name} missed!`);
    }

    console.log(`${othership.name}'s health is now at ${othership.hull}`);

    if (othership.hull <= 0) {
      console.log(`${othership.name} got destroyed!`);
    }
  }
}

const ussAssembly = new ship(20, 5, 7, "ussAssembly");
// use this ship to call shipFight function

// make an empty array to pass/push the ships into
let alienShips = [];

// create a function to put the whole for loop inside to be called for your button

// would have to pass in these values , and would need to use math.random
for (let i = 0; i <= 5; i++) {
  const hull = Math.floor(Math.random() * 6) + 3;
  const firepower = Math.floor(Math.random() * 4) + 2;
  const accuracy = Math.floor(Math.random() * 0.8) + 0.6;
  const alienShip = new ship(hull, firepower, accuracy, `alien ${i}`);
  alienShips.push(alienShip);
  
  while (ussAssembly.hull > 0 && alienShip.hull > 0) {
    if (ussAssembly.hull <= 0 || alienShip.hull <= 0) {
      break; // if ( uss.hull <= 0) { console.log ('we have been instantiated, mission failed') break}
    }
  }
  ussAssembly.shipFight(alienShip);
  alienShip.shipFight(ussAssembly);
}

// write attack function that whenever your ship starts to attack alien ships, it keeps attacking until it gets destroyed

// retreat function
// function retreat() {
//   // when this function is called , you can reset the game.
//   console.log("You have retreated. Game Over.");
//   return;
// }
