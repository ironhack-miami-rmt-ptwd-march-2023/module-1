class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numWheels, fuelType) {
    super(make, model, year);
    this.numWheels = numWheels;
    this.fuelType = fuelType;
  }
}

class Bicycle extends Vehicle {
  constructor(make, model, year, numGears, hasBasket) {
    super(make, model, year);
    this.numGears = numGears;
    this.hasBasket = hasBasket;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2020, 4, 'gasoline');
const myBicycle = new Bicycle('Giant', 'Talon', 2021, 24, true);

console.log(myCar);
console.log(myBicycle);