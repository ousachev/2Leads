const elements = document.querySelectorAll(".showHideContent");
const texts = document.querySelectorAll(".content");

function toggleText(i) {
  const currentText = texts[i];
  const classNames = currentText.classList.value;
  const hideShowBtn = elements[i];

  if (classNames.includes("text-active")) {
    return (
      currentText.classList.remove("text-active"),
      (hideShowBtn.innerText = "Показать")
    );
  }
  return (
    currentText.classList.add("text-active"), (hideShowBtn.innerText = "Скрыть")
  );
}

elements.forEach((element, i) =>
  element.addEventListener("click", () => toggleText(i))
);
