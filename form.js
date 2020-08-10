const form = document.getElementById("name-form");
form.onsubmit = function (event) {
  event.preventDefault();
  console.log(form.fullname.value);
};
