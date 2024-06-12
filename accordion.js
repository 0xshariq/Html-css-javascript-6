const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
const accordionTitle = item.querySelector(".accordion-title");
const content = item.querySelector(".accordion-content");

  accordionTitle.addEventListener("click", () => {
    for (let accordionItem of accordionItems) {
      if (accordionItem != item) {
        accordionItem.classList.remove("active");
      } else {
        // toggle the accordion item
 content.classList.toggle("active");
      }
    }
  });
});


// menu button
const menuBtn = document.querySelector(".menu-btn");
const menuBar = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
menuBtn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  menuItems.classList.toggle("active");
});