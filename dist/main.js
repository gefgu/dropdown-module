(() => {
  const dropdownContainerClassName = "dropdown-container";
  const dropdownItemClassName = "dropdown-item";
  const dropdownIconClassName = "dropdown-icon";
  const dropdownsContainerList = document.querySelectorAll(
    `.${dropdownContainerClassName}`
  );
  dropdownsContainerList.forEach((dropdownContainer) => {
    dropdownContainer.addEventListener("click", () => {
      dropdownContainer.classList.toggle("open-menu");
    });
  });
})();
