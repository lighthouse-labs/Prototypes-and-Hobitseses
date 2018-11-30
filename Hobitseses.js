
// const HobitsesesPrototype = {};
func(hairyness = 8, haveRing = false, home = 'worster shire') {
  // this = {};
  this.home = home;
  this.hairyness = hairyness;
  this.haveRing = haveRing;
  this.adventure = 1;

  // this.__proto__ = HobitsesesPrototype;

  // this.__proto__ = Hobitseses.prototype

  // return this;
}
Hobitseses.prototype.walking = function() {
  if (++this.adventure === 10) {
    this.haveRing = true;
  }
}
Hobitseses.prototype.destroyRing = function() {
  if (!this.haveRing) {
    this.walking();
    return;
  }

  console.log("Throw it in teh fire~!!!!!!");
  this.haveRing = false;
  this.flyYouFools = false;
}

const forod = new Hobitseses(8, true);
const bilob = new Hobitseses(20, false);
console.log(forod, bilob);

forod.destroyRing();

class FrenchFry {

  fry() {
    console.log("ouch");
  }

  static superman() {
    console.log("🤗");
  }
}

console.log(typeof FrenchFry);
FrenchFry.prototype.fry();

FrenchFry.superman();

Hobitseses.superman = function() {
  console.log("🤗");
}

Hobitseses.superman();