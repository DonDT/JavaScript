// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");

date.textContent = new Date().getFullYear();
date.innerHTML = new Date().getFullYear();

// ********** close links ************

// Remember this collapsable div, sections headers, sidebars.
// method one
//initially- height 0, overflow hidden, transition. then when add class- just give fixed or auto height
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // Using method one above
  //linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // This get the height of each particular item even though the parent is set to Zero
  // the more items there are the more bigger it gets
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else linksContainer.style.height = 0;
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  //if (scrollHeight > navHeight) navbar.classList.add("fixed-nav");
  if (scrollHeight > 900) navbar.classList.add("fixed-nav");
  else navbar.classList.remove("fixed-nav");

  if (scrollHeight > 900) topLink.classList.add("show-link");
  else topLink.classList.remove("show-link");
});

// ********** smooth scroll ************
// select links
// Smooth scrolling is about setting the section id, and passing that id to an href link when cliecks moves there

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    //Prevent default is not only used to prevent form submission, it can be used to prevent some
    // default behavior of some tag or css property.
    e.preventDefault();
    //navigate to specific spot

    // target would still go well here since link is as much the parent element as the child element.
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // OffsetTop - a number representing the top position of an element in pixels.
    // This give us the top position of that element
    // calculate the heights
    const navheight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navheight;

    if (!fixedNav) position = position - navheight;

    if (navheight > 82) position = position + containerHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
    console.log(id, position);
  });
});
