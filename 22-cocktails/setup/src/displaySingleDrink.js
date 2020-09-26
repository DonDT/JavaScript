import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  console.log(drink);
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");

  img.src = image;
  document.title = name;
  drinkName.textContent = "hello Donald";
  description.textContent = "Hello donald";
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li > <i class='far fa-checl-square'></i>${item}</li>`;
    })
    .join("");
  //console.log(drink);
};

export default displayDrink;
