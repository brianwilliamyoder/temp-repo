import { AgeCalculator } from "../src/calculator.js";
const { TestScheduler } = require("jest")

describe('AgeCalculator', () => {
  let person;

  beforeEach(() => {
    person = new AgeCalculator("Brian", 37);
  });

  test('should create a new calculator object with properties', () => {
    expect(person.name).toEqual("Brian");
    expect(person.age).toEqual(37);
    expect(person.planetAge).toEqual({});
  })

  test('should calculate a persons mercury age', () => {
    expect(person.planetAge.mercury).toEqual(154.16);

  })
})

