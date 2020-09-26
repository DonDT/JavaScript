import getUser from "../final/utils/fileUser.js";
import get from "./utils/getElement.js";

const btn = get(".btn");

const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  const user = await getUser();
  displayUser(user);
};

window.addEventListener("DOMContentLoaded", showUser);

btn.addEventListener("click", showUser);
