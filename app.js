const imgData = [
  "pic2.jpg",
  "pic1.jpg",
  "pic.jpg",
];

let dImg = 0;

let img = document.querySelector(".img");
img.setAttribute("src", imgData[0]);
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

next.addEventListener("click", () => {
  dImg = (dImg + 1) % imgData.length;
  img.setAttribute("src", imgData[dImg]);
});
previous.addEventListener("click", () => {
  dImg = (dImg - 1 + imgData.length) % imgData.length;
  img.setAttribute("src", imgData[dImg]);
});
