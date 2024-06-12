const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", HandleLog);

function HandleLog(event) {
  const trim = event.currentTarget.value.trim();
  output.textContent = trim === "" ? "Anonymous" : trim;
}
