const colorButtons = document.querySelectorAll(".choose__color-btn");
const headerBlock = document.querySelector(".header__content-images");
const compositionBlock = document.querySelector(".composition__inner");
const caseBlock = document.querySelector(".case");

const COLORS = [
  "color-blue",
  "color-red",
  "color-green",
  "color-white",
  "color-black",
];

colorButtons.forEach((btn) => btn.addEventListener("click", onColorChange));

function onColorChange(evt) {
  const btn = evt.currentTarget;
  const colorClass = btn.dataset.button;

  colorButtons.forEach((b) => b.classList.remove("choose__color-btn-active"));
  btn.classList.add("choose__color-btn-active");

  function switchImages(block) {
    block
      .querySelectorAll(".content__item")
      .forEach((img) => img.classList.remove("content__item-active"));

    const img = block.querySelector(`.content__item.${colorClass}`);
    if (img) img.classList.add("content__item-active");
  }

  switchImages(headerBlock);
  switchImages(compositionBlock);
  switchImages(caseBlock);

  headerBlock.classList.remove(...COLORS);
  headerBlock.classList.add(colorClass);
}
