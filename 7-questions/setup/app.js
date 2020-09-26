//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (el) {
  // console.log(el);
  const btn = el.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach((item) => {
      if (item !== el) item.classList.remove("show-text");
    });
    el.classList.toggle("show-text");
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
