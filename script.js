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
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
//Creating the checkRequired function
function checkRequired(inputArr) {
  //looping through array, the foreach is the metod for loop array
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getFiledName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//GetFieldname function
function getFiledName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Creating function for check length which I use to check lengt in my username and password fields
//I pase in the argumetns of fucntion three parametars and it is the input filed, min length and max length
function checkLength(input, min, max) {
  //Creatnig the if statement where I check if the input lengt is les than min
  //And in the else if block i check if the input velue larger than max allowed

  if (input.value.length < min) {
    showError(
      input,
      `${getFiledName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFiledName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//check passwords match
function checkPasswordsMatch(input1, input2) {
  //If the value of input1 is not equal with input2 value than showError
  if (input1.value !== input2.value) {
    showError(input2, "Passwrods do not match");
  }
}

//Adding the eventlistenr on submit action
form.addEventListener("submit", function(e) {
  e.preventDefault();
  //Calling the custom function
  checkRequired([username, email, password, password2]);

  //CheckLength
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
