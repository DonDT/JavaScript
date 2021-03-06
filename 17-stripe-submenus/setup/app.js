import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");

const linksBtns = [...document.querySelectorAll(".link-btn")];
const subMenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.remove("show");
});
