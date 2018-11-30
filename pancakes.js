
const protoPancake = {};
protoPancake.flip = function() {
  this.toppings.reverse();
};
protoPancake.satisfy = function() {
  this.happyness = true;
};

function newPancake(size = '🤗', shape = 'medium') {
  const pancake = {};

  pancake.toppings = ['syrup', 'butter', 'Adam [9:43 AM', 'Cheeze Whiz'];
  pancake.size = size;
  pancake.shape = shape;

  pancake.__proto__ = protoPancake;

  return pancake;
}

const pan1 = newPancake();
const pan2 = newPancake('large', '💩');
const pan3 = newPancake('small', "Looks like Jesus, probably something you could sell on eBay");

// console.log(pan1, pan2, pan3);

pan1.flip();
pan1.satisfy();

console.log(pan1);