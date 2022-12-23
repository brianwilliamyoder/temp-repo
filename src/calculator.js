export class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.planetAge = {};
  }

  convertPlanetAge() {
    let mercAge =  this.age / .24;
    this.planetAge.mercury = mercAge.toFixed(2);
    
  }

}