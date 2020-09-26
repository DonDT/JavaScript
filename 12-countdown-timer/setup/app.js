const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");

// Selecting all h4's within all deadline format div
const items = document.querySelectorAll(".deadline-format h4");

// creating a date string in the future. Calling new Date() with no arguments gives the current date. With arguments
// new Date(year, month, day, hour, mins, sec, milisec) Month being zero index based, hours being 24h based.

let tempDate = new Date();
let tempYear = new Date().getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2021, 1, 24, 11, 30, 0); <== This is best for discounts ...
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); // updating the discount

//console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let weekDay = futureDate.getDay();
weekDay = weekdays[weekDay];

giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month}  ${year} ${hours}:${mins}am `;

// future time in milliseconds
// calculating the difference between two dates, we use milliseconds and get the difference.
// From which we now calculate how many days mins, seconds ... are left inside the number.

// Future time in miliseconds.

const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  //console.log(today);

  const t = futureTime - today;
  //console.log(t);
  // 1 second = 1000 miliseconds
  // 1 min = 60s
  // 1 hour = 60min
  // one day = 24 hrs

  // values in ms
  const oneday = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const days = Math.floor(t / oneday);
  let hours = Math.floor((t % oneday) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
  // console.log(days, hours, mins, seconds);

  const values = [days, hours, mins, seconds];
  function format(item) {
    if (item < 10) {
      return `0 ${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class='expired'>Sorry this give away has expired</h4>`;
  }
}
// countDown

let countDown = setInterval(() => {
  getRemainingTime();
}, 1000);

getRemainingTime();
