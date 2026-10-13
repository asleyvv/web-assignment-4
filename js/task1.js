// task 1: the browser already checks the form.
// this event only runs when everything is valid, so we just show a message
const form = document.getElementById("form1");
const ok = document.getElementById("ok");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ok.hidden = false;
});
