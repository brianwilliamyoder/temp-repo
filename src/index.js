import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './calculator.js';


function handleAgeForm(event) {
  event.preventDefault();
  const age = document.querySelector("#your-age").value;
  const person = new AgeCalculator(age);
  const futureAge = document.querySelector("#future-age").value;
  const pastAge = document.querySelector("#past-age").value;
  person.convertEarthAge(futureAge, pastAge);
  person.convertMercuryAge(futureAge, pastAge);
  person.convertVenusAge(futureAge, pastAge);
  person.convertMarsAge(futureAge, pastAge);
  person.convertJupiterAge(futureAge, pastAge);
  displayResults(person);
}

function displayResults(person) {
  let futureAge =  document.querySelector("#future-age").value;
  let pastAge = document.querySelector("#past-age").value;
  let displayPlanetAge = document.querySelector("#display-planet-age");
  let displayFutureAge = document.querySelector("#display-future-age");
  let displayPastAge = document.querySelector("#display-past-age");
  displayPlanetAge.append("On Mercury you would be " + person.planetAge.mercury + " years old. ");
  displayPlanetAge.append("On Venus you would be " + person.planetAge.venus + " years old. ");
  displayPlanetAge.append("On Mars you would be " + person.planetAge.mars + " years old. ");
  displayPlanetAge.append("On Jupiter you would be " + person.planetAge.jupiter + " years old.");
  displayFutureAge.append("You will be " + futureAge + " in " + person.yearsUntil.earth + " Earth years. " );
  displayFutureAge.append("You will be " + futureAge + " in " + person.yearsUntil.mercury + " Mercury years. " );
  displayFutureAge.append("You will be " + futureAge + " in " + person.yearsUntil.venus + " Venus years. " );
  displayFutureAge.append("You will be " + futureAge + " in " + person.yearsUntil.mars + " Mars years. " );
  displayFutureAge.append("You will be " + futureAge + " in " + person.yearsUntil.jupiter + " Jupiter years." );
  displayPastAge.append("You were " + pastAge + ", " + person.yearsSince.earth + " Earth years ago. " );
  displayPastAge.append("You were " + pastAge + ", " + person.yearsSince.mercury + " Mercury years ago. " );
  displayPastAge.append("You were " + pastAge + ", " + person.yearsSince.venus + " Venus years ago. " );
  displayPastAge.append("You were " + pastAge + ", " + person.yearsSince.mars + " Martian years ago. " );
  displayPastAge.append("You were " + pastAge + ", " + person.yearsSince.jupiter + " Jupiter years ago. " );


}

window.addEventListener("load", function() {
  document.querySelector("#form").addEventListener("submit", handleAgeForm);
  document.querySelector("#form").addEventListener("submit", displayResults);
});