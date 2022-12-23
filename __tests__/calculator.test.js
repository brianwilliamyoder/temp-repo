import { AgeCalculator } from "../src/calculator.js";
const { TestScheduler } = require("jest")

describe('AgeCalculator', () => {
  let person;

  beforeEach(() => {
    person = new AgeCalculator(37);
  });

  test('should create a new calculator object with properties', () => {
    expect(person.age).toEqual(37);
    expect(person.planetAge).toEqual({});
    expect(person.yearsUntil).toEqual({});
    expect(person.yearsSince).toEqual({});
  })


  test('should calculate a persons mercury age', () => {
    person.convertMercuryAge();
    expect(person.planetAge.mercury).toEqual("154.17");

  })

  test('should calculate a persons venus age', () => {
    person.convertVenusAge();
    expect(person.planetAge.venus).toEqual("59.68");
  
  })

  test('should calculate a persons mars age', () => {
    person.convertMarsAge();
    expect(person.planetAge.mars).toEqual("19.68");
  
  })

  test('should calculate a persons jupiter age', () => {
    person.convertJupiterAge();
    expect(person.planetAge.jupiter).toEqual("3.12");
  })

  test('should calculate years until a birthday in earth years', () => {
    person.yearsUntilEarth(39);
    expect(earthUntilAge).toEqual("2");
  })

})