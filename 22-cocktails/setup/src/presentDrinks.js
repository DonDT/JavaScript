import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // fecth drinks
  const data = await fetchDrinks(url);
  console.log(data);

  // display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
  console.log(section);
};

export default showDrinks;
