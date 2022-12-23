export class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.planetAge = {};
  }

  convertMercuryAge() {
    let mercAge =  this.age / .24;
    let venusAge = this.age / .62;
    let marsAge = this.age / 1.88;
    let jupiterAge = this.age / 11.86;
    this.planetAge.mercury = mercAge.toFixed(2);
    this.planetAge.venus = venusAge.toFixed(2);
    this.planetAge.mars = marsAge.toFixed(2);
    this.planetAge.jupiter = jupiterAge.toFixed(2);
  }

}