const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    //e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // we don't need JSON stringify since it's already a string
    // save the id to local storage and retrive it where we need to use it
    localStorage.setItem("drink", id);
    console.log(id);
  });
};

export default setDrink;
