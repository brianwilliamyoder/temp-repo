export class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetAge = {};
    this.yearsUntil = {};
    this.yearsSince = {}
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

  convertJupiterAge() {
    let jupiterAge = this.age / 11.86;
    this.planetAge.jupiter = jupiterAge.toFixed(2);
  }
}