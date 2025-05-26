const section = new Isotope(".section", {
  // options
  itemSelector: "article",
  //   layoutMode: "fitRows",
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: "article",
  },
});

const sortingBtns = document.querySelectorAll(".nav li");
sortingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.currentTarget.querySelector("a").getAttribute("href");

    section.arrange({
      filter: filter,
    });
    sortingBtns.forEach((btnEl) => {
      btnEl.classList.remove("on");
    });
    e.currentTarget.classList.add("on");
  });
});
