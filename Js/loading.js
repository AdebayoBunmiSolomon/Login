var txtCounter = document.querySelector("#txt-counter");
var divLoading = document.querySelector("#div-loading");
var txtCounter2 = document.querySelector("#txt-counter2");
var count = 0;

divLoading.style.width = 0 + "%";

window.setInterval(function () {
  loading();
}, 30);

function loading() {
  count++;
  txtCounter.textContent = 0 + count;
  txtCounter2.textContent = parseInt(txtCounter.textContent);
  divLoading.style.width = 10 + parseInt(txtCounter.textContent) + "%";
  if (count === 88) {
    // window.setTimeout(function () {
    window.location.href = "index.html";
    // }, 100);
    count = 0;
  }
  //   console.log("counter = " + txtCounter.textContent);
}
