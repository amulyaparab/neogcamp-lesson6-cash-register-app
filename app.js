var btnPrimary = document.querySelector("#btn-primary");
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-message");

var availableNotes = ["2000", "500", "200", "100", "50", "20", "10", "1"];

btnPrimary.addEventListener("click", function validateBillAmount() {
  message.style.display = "none";

  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      hideMessage();
      console.log("ok");
    } else {
      showMessage();
      message.innerText = "Do you want to wash dishes ?";
    }
  } else {
    showMessage();
    message.innerText = "Invalid Bill Amount";
  }
});

function hideMessage(msg) {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
}
