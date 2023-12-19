const password = document.getElementById("password");
const showBtn = document.querySelector(".showimg");
const passErr = document.querySelector(".passworderr");
const firstNameErr = document.querySelector(".firstnamerr");
//selectring element from the dom to manipulate

showBtn.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
}); //password visibility with turnary operator

document.getElementById("regform").addEventListener("submit", function (event) {
  event.preventDefault();
  const passworVal = document.getElementById("password").value;
  validatepassword(passworVal);
  validateFirstName();
});
//event listener that listens and handle the submittion of the form

function validatepassword(passworVal) {
  let regExp = /[.,!#?\\-]/;
  //regular expression for the first letter all special character
  if (passworVal.length < 8) {
    passErr.textContent = "Password must be greater than 8 characters";
    return false;
  } else if (!passworVal.match(regExp)) {
    passErr.textContent = "Password must contain (., !, #, ?, or -)";
    return false;
  } else {
    passErr.textContent = "";
    return true;
  }
} //validate the password by checking if it contains some special character and if length is less than 8 character

function validateFirstName() {
  const firstName = document.getElementById("firstName").value;
  let firReg = /^[A-Z]/;
  //regular expression for the first letter that start with capital letter 
  if (!firstName.match(firReg)) {
    firstNameErr.textContent = "Must start capital letter";
    return false;
  } else {
    firstNameErr.textContent = "";
    return true;
  }
  //check if the first letter of the first name does not match the regular expression
}
//validate the firstname by checking if it starts with capital letter 