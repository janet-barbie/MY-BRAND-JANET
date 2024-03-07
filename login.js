document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hello");
  let name = document.getElementById("name").value;

  let password = document.getElementById("password").value;

  let nameRegex = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
  if (name === "") {
    alert("Please fill in all fields.");
    document.querySelector(".input-group").classList.add("error");
    return;
  } else if (password === "") {
    alert("Please fill in all fields.");
    document.querySelector(".input-group").classList.add("error");
    return;
  } else if (!nameRegex.test(name)) {
    document.querySelector(".input-group").classList.add("error");
    alert("please fill all the fields correctly");
    return;
  } else if (!password.length >= 8) {
    document.querySelector(".input-group").classList.add("error");
    alert("please fill all the fields correctly");
    return;
  }

  window.location.href = "menu.html";
});
