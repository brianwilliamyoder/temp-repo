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


  test('should calculate a persons mercury age, years until age, and years since age', () => {
    person.convertMercuryAge(39, 36);
    expect(person.planetAge.mercury).toEqual("154.17");
    expect(person.yearsUntil.mercury).toEqual("8.33");
    expect(person.yearsSince.mercury).toEqual("4.17");

  })

  test('should calculate a persons venus age', () => {
    person.convertVenusAge(person.age);
    expect(person.planetAge.venus).toEqual("59.68");
  
  })

  test('should calculate a persons mars age', () => {
    person.convertMarsAge(person.age);
    expect(person.planetAge.mars).toEqual("19.68");
  
  })

  test('should calculate a persons jupiter age', () => {
    person.convertJupiterAge(person.age);
    expect(person.planetAge.jupiter).toEqual("3.12");
  })

  test('should calculate years until a birthday in earth years', () => {
    person.convertEarthAge(39, 36);
    expect(person.yearsUntil.earth).toEqual(2);
    expect(person.yearsSince.earth).toEqual(1);
  })

  test('should calculate a persons age on all planets, including years since, and years until a given age', () => {
  person.convertEarthAge(39, 36);
  person.convertMercuryAge(39, 36);
  person.convertVenusAge(39, 36);
  person.convertMarsAge(39, 36);
  person.convertJupiterAge(39, 36)
  expect(person.yearsUntil.earth).toEqual(2);
  expect(person.yearsSince.earth).toEqual(1);
  expect(person.yearsUntil.mercury).toEqual("8.33");
  expect(person.yearsSince.mercury).toEqual("4.17");
  expect(person.yearsUntil.venus).toEqual("3.23");
  expect(person.yearsSince.venus).toEqual("1.61");
  expect(person.yearsUntil.mars).toEqual("1.06");
  expect(person.yearsSince.mars).toEqual("0.53");
  expect(person.yearsUntil.jupiter).toEqual("0.17");
  expect(person.yearsSince.jupiter).toEqual("0.08");
  

  })

})