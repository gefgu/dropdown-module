(() => {
  const dropdownContainerClassName = "dropdown-container";
  const dropdownItemClassName = "dropdown-item";
  const dropdownIconClassName = "dropdown-icon";
  const openMenuClass = "open-menu";
  const dropdownsContainerList = document.querySelectorAll(
    `.${dropdownContainerClassName}`
  );
  dropdownsContainerList.forEach((dropdownContainer) => {
    dropdownContainer.addEventListener("click", () => {
      dropdownContainer.classList.toggle(`${openMenuClass}`);
    });
  });

  // Apply styles

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet.insertRule(`
  .${dropdownContainerClassName} > .${dropdownItemClassName} {
    display: none;
  }`);
  style.sheet.insertRule(`
  .${dropdownContainerClassName}.${openMenuClass} > .${dropdownItemClassName} {
    display: block;
  }`);
})();