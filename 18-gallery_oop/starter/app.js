// Refactor to use Class based syntax

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  // First select the whole div
  this.container = element;
  // Select all the images in the div
  this.list = [...element.querySelectorAll(".img")];
  // select the modal
  this.modal = getElement(".modal");
  // select the main image in the modal
  this.modalImg = getElement(".main-img");
  //select images container
  this.modalImages = getElement(".modal-images");
  // select all the buttons
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  this.imageName = getElement(".image-name");

  //
  let self = this;
  //
  // bind functions
  this.closeModal = this.closeModal.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.choseImage = this.choseImage.bind(this);
  // if we didn't bind this, this would point to what on it's left
  // if we didn't bind these, we will be pointing to each section individually
  // With bind we point to the parent class or function

  //this.openModal = this.openModal.bind(this); // we don't need to bind this since the function where in it is, is binded

  // In vanilla javascript where we create an instance of a class or object and use it.
  // it is a good practice to remove the event listeners when we use the instance on a new section.

  this.container.addEventListener(
    "click",
    function (e) {
      //here now we can say self.openModal(), and it would point to the gallery, then we do not need to bind the parent //function. And can now use self.openModal()
      if (e.target.classList.contains("img")) {
        console.log(e.target);
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
  //console.log(element, this.list);
}
Gallery.prototype.openModal = function (selectedImage, list) {
  // since we've bind this method, this now point to the container
  //console.log(this);
  // we can now access the modal i gallery
  this.setMainImage(selectedImage);
  //console.log(selectedImage, list);

  // without join the items in the array are seperated with a coma. This join takes out the comma
  // use innerHTML, means the inner html of that element.so it could be one tag of the ame item or multiple
  // tags of the same of different items
  this.modalImages.innerHTML = list
    .map((image) => {
      return `<img src='${image.src}' title='${image.title}' data-id='${
        image.dataset.id
      }' class="${
        selectedImage.dataset.id === image.dataset.id
          ? "modal-img selected"
          : "modal-img"
      }"/>`;
    })
    .join("");

  this.modal.classList.add("open");
  // very important to remove this when we cloase the modal
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
  this.modalImages.addEventListener("click", this.choseImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  // Each image has a source and a title attribute.
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.modalImages.removeEventListener("click", this.prevImage);
};

Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};
Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector(".selected");
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};

Gallery.prototype.choseImage = function (e) {
  if (e.target.classList.contains("modal-img")) {
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    e.target.classList.add("selected");
    this.setMainImage(e.target);
    console.log(e.target);
  }
};

const Natour = new Gallery(getElement(".nature"));
const City = new Gallery(getElement(".city"));
