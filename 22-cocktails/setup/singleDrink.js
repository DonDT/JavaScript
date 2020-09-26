import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  console.log(id);

  // reloacating to a new page
  if (!id) {
    window.location.replace("index.html");
  }
  const drink = await fetchDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  displayDrink(drink);
  console.log(drink);
};

window.addEventListener("DomContentLoaded", presentDrink);
