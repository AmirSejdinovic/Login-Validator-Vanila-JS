//Grabing the form element from DOM via method document.getElementById
const form = document.getElementById("form");
//Grabing the username inptut from dom
const username = document.getElementById("username");
//Grabing the email input element from DOM
const email = document.getElementById("email");
//Grabing the password input from DOM
const password = document.getElementById("password");
//Grabing the confirm password input from DOM
const password2 = document.getElementById("password2");

//Creating custom functions
//Show input error message function has two arguments input from dom and custom message which we defined when calling the function
function showError(input, message) {
  //Geting the parent element of inptut, that is the form control
  const formControl = input.parentElement;
  //Overiding the class of element, and here I added error css class which will display red color on border
  formControl.className = "form-control error";
  //Selecting the small HTML tag from formControl elemet
  const small = formControl.querySelector("small");
  //Showing the custom text from message argument which I fill on calling the function
  small.innerText = message;
}

//Custom fucntion for the success
function showSuccess(input) {
  //Grabing the parent element
  const formControl = input.parentElement;
  //Adding the success css class so the boreder is greeen
  formControl.className = "form-control success";
}

//Function for checking if the email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Adding the eventlistenr on submit action
form.addEventListener("submit", function(e) {
  e.preventDefault();
  //If the username is empty than do this code
  if (username.value === "") {
    //Callig the fucntion with parametars
    showError(username, "Username is required");
  } else {
    //if the username is not empty
    //call function
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Email is required");
  } else {
    showSuccess(password2);
  }
});
