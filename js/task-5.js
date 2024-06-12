const btnChange = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btnChange.addEventListener("click", ChangeBackground);

function ChangeBackground() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
