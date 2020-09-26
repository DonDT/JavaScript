const URL = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

btn.addEventListener("click", () => {
  fetch(URL)
    .then((response) => {
      response.json();
    })
    .then((data) => displayData(data.value))
    .catch((error) => console.log(error));
});

function displayData({ value: joke }) {
  img.classList.add("shake-img");
  //const { value: joke } = data;
  //const response = JSON.parse(xhr.responseText);
  const random = Math.random() * 1000;
  content.textContent = joke;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
