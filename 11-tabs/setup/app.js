const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// we can target an entire div and listen to the events thats clicked inside.
// We target the div put the event listener and get the evnt of the item clicked
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from all buttons
    btns.forEach((button) => {
      button.classList.remove("active");
      // like refs in react. Current target element
      e.target.classList.add("active");
    });
    // Hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
      const element = document.getElementById(id);
      element.classList.add("active");
    });
  }
  console.log(e.target.dataset.id);
});
