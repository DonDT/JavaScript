import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
// selecting an attribute
const input = get('[name="drinks"]');

// serach on each key up
form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseUrl}${value}`);
  console.log(input.value);
});
