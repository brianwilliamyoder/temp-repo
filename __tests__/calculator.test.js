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
    person.convertMercuryAge(person.age, untilAge, sinceAge);
    expect(person.age).toEqual(154.17);
    expect(person.yearsUntil.mercury).toEqual();
    expect(person.yearsSince.mercury).toEqual();

  })

  test('should calculate a persons venus age', () => {
    person.convertVenusAge(person.age);
    expect(person.convertVenusAge(person.age)).toEqual(59.67741935483871);
  
  })

  test('should calculate a persons mars age', () => {
    person.convertMarsAge(person.age);
    expect(person.convertMarsAge(person.age)).toEqual(19.680851063829788);
  
  })

  test('should calculate a persons jupiter age', () => {
    person.convertJupiterAge(person.age);
    expect(person.convertJupiterAge(person.age)).toEqual(3.119730185497471);
  })

  test('should calculate years until a birthday in earth years', () => {
    person.yearsUntilEarth(39);
    expect(person.yearsUntilEarth(39)).toEqual(2);
  })


})