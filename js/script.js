const firstname = document.getElementById("firstName").value;
const lastname = document.getElementById("lastName").value;
const password = document.getElementById("password")
const showBtn = document.querySelector(".showimg");
const passErr = document.querySelector(".passworderr");
const firstNameErr = document.querySelector(".firstnamerr");
let passworVal = password.value;

showBtn.addEventListener("click", () => {
  password.type = (password.type === "password") ? "text" : "password";
});//password visibility with turnary operator


document.getElementById("regform").addEventListener("submit", function (event) {
  event.preventDefault();
  validatepassword(passworVal);
});
function validatepassword(passworVal) {
  let regExp = /[.,!#?\\-]/;
  while(passworVal.length < 8) {
    passErr.textContent = "Password must be greater than 8 characters";
    return false;
  }
  if (!passworVal.match(regExp)) {
    passErr.textContent = "Password must contain (., !, #, ?, or -)";
    return false;
  } else {
    passErr.textContent = "";
    return true;
  }
} //validate the password by checking if it contains some special character

  