const URL = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

btn.addEventListener("click", () => {
  console.log("Hello Donald!!!");
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      img.classList.add("shake-img");
      const { value: joke } = JSON.parse(xhr.responseText);
      //const response = JSON.parse(xhr.responseText);
      const random = Math.random() * 1000;
      content.textContent = joke;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, random);
    } else {
      console.log({ status: xhr.status, text: xhr.statusText });
    }
  };
}
