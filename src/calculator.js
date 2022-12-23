export class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetAge = {};
    this.yearsUntil = {};
    this.yearsSince = {};
  }

  convertMercuryAge(untilAge, sinceAge) {
    let mercAge =  this.age / .24;
    this.planetAge.mercury = mercAge.toFixed(2);
    this.yearsUntil.mercury = ((untilAge / .24) - mercAge).toFixed(2);
    this.yearsSince.mercury = (mercAge - (sinceAge / .24)).toFixed(2);
  }
  
  convertVenusAge(untilAge, sinceAge) {
    let venusAge = this.age / .62;
    this.planetAge.venus = venusAge.toFixed(2);
    this.yearsUntil.venus = ((untilAge / .62) - venusAge).toFixed(2);
    this.yearsSince.venus = (venusAge - (sinceAge / .62)).toFixed(2);

   
  }

  convertMarsAge(untilAge, sinceAge) {
    let marsAge = this.age / 1.88;
    this.planetAge.mars = marsAge.toFixed(2);
    this.yearsUntil.mars = ((untilAge / 1.88) - marsAge).toFixed(2);
    this.yearsSince.mars = (marsAge - (sinceAge / 1.88)).toFixed(2);
  }

  convertJupiterAge(untilAge, sinceAge) {
    let jupiterAge = this.age / 11.86;
    this.planetAge.jupiter = jupiterAge.toFixed(2);
    this.yearsUntil.jupiter = ((untilAge / 11.86) - jupiterAge).toFixed(2);
    this.yearsSince.jupiter = (jupiterAge - (sinceAge / 11.86)).toFixed(2);
  }

  convertEarthAge(untilAge, sinceAge) {
    this.yearsUntil.earth = untilAge - this.age;
    this.yearsSince.earth = this.age - sinceAge;
  }

}