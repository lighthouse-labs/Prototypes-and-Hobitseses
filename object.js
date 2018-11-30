let train = {
  cars: ['yellow', 'red', 'shiny', 'bar', 'car with circus animals from the beginning of Last Crusade'],
  caboose: true,
  engine: 2,
  mail: '💩',
  chooChoo() {
    console.log(`${this.mail} Emissions`);
  }
};

let postalWorker = {
  name: 'andy',
  // mail: 'maybe',
  deliverMail() {
    console.log(`${this.name} not now, i'm striking`);
  }
};

// console.log(train.engine);
// train.chooChoo();

// postalWorker.deliverMail();

postalWorker.__proto__ = train;

postalWorker.chooChoo();

