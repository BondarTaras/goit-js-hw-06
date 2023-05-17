//!------------------------------------------------
const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});
