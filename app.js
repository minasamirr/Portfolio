const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransition() {
  //button click active class
  for (const element of sectBtn) {
    element.addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //section active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other buttons
      //note if u want to make the icons to animate like the page replace the active-icons with active
      sectBtn.forEach((btn) => {
        btn.classList.remove("active-icons");
      });
      e.target.classList.add("active-icons");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      let element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}
pageTransition();
