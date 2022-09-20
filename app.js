var btnPrimary = document.querySelector("#btn-primary");
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var table = document.querySelector("#table");
var availableNotes = ["2000", "500", "200", "100", "50", "20", "10", "1"];

btnPrimary.addEventListener("click", () => {
  var newBillAmount = Number(billAmount.value);
  var newCashGiven = Number(cashGiven.value);
  hideMessage();
  if (newBillAmount > 0) {
    if (newCashGiven >= newBillAmount) {
      showTable(table);
      var amountToBeReturned = newCashGiven - newBillAmount;
      calculateChange(amountToBeReturned);
      showMessage("Thanks! Come back again😊");
    } else if (
      newBillAmount > newCashGiven &&
      newCashGiven != "" &&
      newCashGiven > 0
    ) {
      showMessage("Do you want to wash plates ?🧼🍽️");
      hideTable(table);
    } else if (newCashGiven < 0) {
      hideMessage();
      hideTable(table);
      showMessage(" I need Actual Cash Man😒");
    } else {
      hideMessage();
      hideTable(table);
      showMessage("Gimme Cash 🖐️💸");
    }
  } else {
    showMessage("Invalid Bill Amount❌");
    hideTable(table);
  }
});

function hideMessage() {
  message.style.display = "none";
}
function hideTable(table) {
  table.style.display = "none";
}
function showTable(table) {
  table.style.display = "flex";
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
