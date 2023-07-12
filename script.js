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

// let shouldContinue = false;

// //get our id from html to javascript
// const attack = document.getElementById("attack");
// const enemyshipfleet = 0;

// attack.addEventListener("click",attack()=> {
// //const enemyship = alienShips[enemyshipfleet];
// shouldContinue = true;
// })

// let continue = false;

// function interateLoop() {

//   if (continue) {
// setTimeout(interateLoop, 0);
//   }
// }

// write attack function that whenever your ship starts to attack alien ships, it keeps attacking until it gets destroyed

// create a function to put the whole for loop inside to be called for your button
function attackButton() {
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
      ussAssembly.shipFight(alienShip);
      alienShip.shipFight(ussAssembly);
      let person = prompt("Do you want to attack or Retreat?", "retreat");
      if (person === "attack") {
        console.log("you chose to attack! Press the attack button");
      } else {
        console.log("you chose to retreat");
        retreat();
        return;
      }
    }
  }
}

// write function that resets the alienship array back to 0 thus resetting the game.
// function resetGame() {
//   alienShips = [];
//   return;
// }

// retreat function
function retreat() {
  // when this function is called , you can reset the game.
  console.log("You have retreated. Game Over.");
  // resetGame();
  return;
}

// function result() {
//   if (alienShips[5].hull <= 0) {
//     console.log("You Win!")
//   } else if (ussAssembly.hull <= 0) {
//     console.log("You Lose!")
//   }
// }

// psuedo code for your retreat button and functionality

// 1. have a retreat function that when called , it states you have retreated. then returns.
// 2. have a function that checks for when the retreat button has been clicked after each iteration of the alienShips Array. and if it has been clicked
// to then call the retreat function. else , if the attack button is clicked, then continue through the iteration via the attackButton function.

// if (retreatButtonClicked) {
//   retreatButtonClicked = true;
//   retreat();

// } else if (attackButtonClicked) {
//   attackButtonClicked = true;
//   attackButton();
// }

// retreatButtonClicked = document.querySelector(".retreat");
// attackButtonClicked = document.querySelector(".attack");
