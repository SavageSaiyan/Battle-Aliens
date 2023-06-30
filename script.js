// create ship class and give it health attack
class ship {
  constructor(health, attack) {
    this.health = health;
    this.attack = attack;
  }
}

const myShip = new ship(100, 50);

const alienShip = new ship(100, 50);

// write attack function that whenever your ship starts to attack alien ships, it keeps attacking until it gets destroyed

function battleFunction() {
  while (myShip.health > 0) {
    // make your ship fight alien ships
  }
}
