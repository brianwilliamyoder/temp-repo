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
  displayResults();
}

function displayResults() {
  

}

window.addEventListener("load", function() {
  document.querySelector("#form").addEventListener("submit", handleAgeForm);
});