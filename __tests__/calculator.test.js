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
    expect(person.convertMercuryAge()).toEqual(154.16666666666669);

  })

  test('should calculate a persons venus age', () => {
    person.convertVenusAge();
    expect(person.convertVenusAge()).toEqual(59.67741935483871);
  
  })

  test('should calculate a persons mars age', () => {
    person.convertMarsAge();
    expect(person.convertMarsAge()).toEqual(19.680851063829788);
  
  })

  test('should calculate a persons jupiter age', () => {
    person.convertJupiterAge();
    expect(person.convertJupiterAge()).toEqual(3.119730185497471);
  })

  test('should calculate years until a birthday in earth years', () => {
    person.yearsUntilEarth(39);
    expect(person.yearsUntilEarth(39)).toEqual(2);
  })

  test('should calculate years until a birthday in mercury, venus, mars, and juipter years', () => {
    person.yearsUntiLMercury(39);
    person.yearsUntilVenus(39);
    person.yearsUntilMars(39);
    person.yearsUntilJupiter(39);
    expect(person.yearsUntilMercury(39)).toEqual();
    expect(person.yearsUntilVenus(39)).toEqual();
    expect(person.yearsUntilMars(39)).toEqual();
    expect(person.yearsUntilJupiter(39)).toEqual();
  })
})