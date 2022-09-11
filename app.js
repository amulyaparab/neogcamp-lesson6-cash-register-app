var btnPrimary = document.querySelector("#btn-primary");
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableNotes = ["2000", "500", "200", "100", "50", "20", "10", "1"];

btnPrimary.addEventListener("click", function validateBillAmount() {
  if (billAmount.value >= 0) {
    if (cashGiven.value >= billAmount.value) {
      hideMessage();
      var amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you want to wash dishes ?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function hideMessage(msg) {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
