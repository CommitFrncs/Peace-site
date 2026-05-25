const grid = document.querySelector(".gallery-grid");

imagesLoaded(grid, function () {
  const msnry = new Masonry(grid, {
    itemSelector: ".gallery-item",
    columnWidth: ".gallery-sizer",
    percentPosition: true,
    gutter: 10,
  });
});
