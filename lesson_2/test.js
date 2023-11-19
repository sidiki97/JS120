
const Vehicle = {
    range(){
      return this.fuelEfficiency * this.fuelCap;
    }
}

// class Vehicle {
//   constructor(kmTravelledPerLiter,fuelCapInLiter) {
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }
//   range(){
//     return this.fuelEfficiency * this.fuelCap;
//   }
// }

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter,fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}


// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30,30,32,32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20,20], 80, 8.0);
//   }
// }


class Catamaran{
  constructor(propellerCount, hullCount, kmTravelledPerLiter,fuelCapInLiter) {

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;

  }
}

Object.assign(Catamaran.prototype, Vehicle);


let catamaran = new Catamaran(2, 1, 90, 9.0);


console.log(catamaran.range());