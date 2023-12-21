// let foo = {
//   Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     return this
//   },

//   changeMake(newMake) {
    
//     this.Car.make = newMake;
//   }
// };


// let car = foo.Car('Toyota', 'Camry', 2019);

// car.changeMake("Honda");

// console.log(car);

// console.log([].every.call(String("EEE"), char => {
//   console.log('hit');
//   return char === 'E';
// }));

// function Car(make) {
//   this.make = make;
// }

// class Van {
//   constructor(make){
//     this.make = make;
//   }
// }

// console.log(typeof Car);
// console.log(typeof Van);

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   static getDescription() {
//     return 'A rectangle is a shape with 4 sides';
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }


// let rect = new Rectangle(1,2);
// rect.getDescription();

// let carPrototype = {
//   // code omitted for brevity (start and stop methods)

//   inite(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     return this;
//   },
// };


// let car = carPrototype.inite('honda', 'crv', 2012);
// console.log(car);

let car = {
  name: 'Honda'
}

console.log('name' in car);