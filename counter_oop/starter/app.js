function Counter(element, value) {
  this.counter = element;
  this.value = value;
  // then here, within that div, that element, we can search and select a particular element.
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;

  // Bind this to all functions
  this.increase = this.increase.bind(this);
  this.reset = this.reset.bind(this);
  this.decrease = this.decrease.bind(this);
  // in the place this.increase.bind(this) we can now use the increase, reset and decrease
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);

  console.log(element, value);
}

Counter.prototype.increase = function () {
  this.value++;
  console.log(this);
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

function getElement(selection) {
  // we can select a whole group of element here
  const element = document.querySelector(selection);

  if (element) return element;
  else
    throw new Error(
      `Please check ${selection} selector , no such element exists`
    );
}
