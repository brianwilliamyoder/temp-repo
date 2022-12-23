import { AgeCalculator } from "../src/calculator.js";
const { TestScheduler } = require("jest")

describe('AgeCalculator', () => {
  test('should create a new calculator object with properties', () => {
    const person = new AgeCalculator("Brian", 37);
    expect(person.name).toEqual("Brian");
    expect(person.age).toEqual(37);
    expect(person.planetAge).toEqual({});
  })
})
