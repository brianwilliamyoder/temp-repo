export class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.planetAge = {};
  }

  convertMercuryAge() {
    let mercAge =  this.age / .24;
    this.planetAge.mercury = mercAge.toFixed(2);
  }
  
  convertVenusAge() {
    let venusAge = this.age / .62;
    this.planetAge.venus = venusAge.toFixed(2);
  }


  convertMarsAge() {
    let marsAge = this.age / 1.88;
    this.planetAge.mars = marsAge.toFixed(2);
  }
  
}