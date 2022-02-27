window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
  });
  document.querySelectorAll(".text").forEach(function (Elem) {
    Elem.addEventListener("click", function (event) {
        console.log(event)
      event.target.classList.toggle("alert");
    });
  });
});
