document.addEventListener("DOMContentLoaded", function () {
  var closeFlashButton = document.querySelector("span.close-flash");
  if (closeFlashButton) {
    closeFlashButton.addEventListener("click", closeFlashMessage);
  }
});

const closeFlashMessage = (ev) => {
  const flashMessage = ev.target.parentElement;
  flashMessage.remove();
};
