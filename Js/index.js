var divSubMessage = document.querySelector("#div-sub-message");
var txtBloom = document.querySelector("#txt-bloom");
var txtMerge = document.querySelector("#txt-merge");
var messageIcon = document.querySelector("#error-icon");
var messageError = document.querySelector("#error-message");
var btnSignIn = document.querySelector("#btn-signIn");
var txtEmail = document.querySelector("#txt-email");
var txtPassword = document.querySelector("#txt-password");
var inputs = document.querySelectorAll("input");

var validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var block = "block";
var none = "none";

divSubMessage.style.display = none;

var count = 0;
var counter;

var messageCount = 0;
var messageCounter;

//Timer to change text color at intervals
window.setInterval(function () {
  changeTextColor();
  messageTimeOut();
}, 100);

function changeTextColor() {
  count++;
  counter = 0 + count;
  if (counter === 5) {
    txtBloom.style.color = "white";
    txtMerge.style.color = "rgba(45, 0, 128, 0.932)";
  } else if (counter === 10) {
    txtBloom.style.color = "rgba(45, 0, 128, 0.932)";
    txtMerge.style.color = "white";
    count = 0;
  }
  // console.log(counter);
}

btnSignIn.addEventListener("click", function () {
  messageCount = 0;
  if (txtEmail.value === "") {
    messageError.textContent = "Enter email ";
    messageIcon.setAttribute("src", "Images/angry3.gif");
    divSubMessage.style.display = block;
    divSubMessage.style.backgroundColor = "crimson";
    txtEmail.focus();
    return;
  } else if (!txtEmail.value.match(validateEmail)) {
    messageError.textContent = "Invalid address ";
    messageIcon.setAttribute("src", "Images/angry3.gif");
    divSubMessage.style.display = block;
    divSubMessage.style.backgroundColor = "crimson";
    txtEmail.focus();
    return;
  }
  if (txtPassword.value === "") {
    messageError.textContent = "Enter password ";
    messageIcon.setAttribute("src", "Images/angry3.gif");
    divSubMessage.style.display = block;
    divSubMessage.style.backgroundColor = "crimson";
    txtPassword.focus();
    return;
  }
  if ((txtEmail.value !== "") & (txtPassword.value !== "")) {
    messageError.textContent = "Login Successful ";
    messageIcon.setAttribute("src", "Images/gif3.gif");
    divSubMessage.style.display = block;
    divSubMessage.style.backgroundColor = "mediumseagreen";
    window.location.href = "loading.html";
  }
});

inputs.forEach((input) => {
  input.addEventListener("mouseover", function () {
    input.style.borderColor = "rgba(45, 0, 128, 0.699)";
  });
  input.addEventListener("mouseleave", function () {
    input.style.borderColor = "#ced4da";
  });
});

function messageTimeOut() {
  messageCount++;
  messageCounter = 0 + messageCount;
  // console.log("Message counter = " + messageCounter);
  if (messageCounter === 20) {
    divSubMessage.style.display = none;
    messageCount = 0;
  }
}
