//!------------------------------------------------
const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const actualLength = input.value.length;

  input.classList.remove("valid", "invalid");

  if (actualLength === expectedLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
