// task 2: the Send button opens this video
const form = document.getElementById("form2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
