var btnPrimary = document.querySelector("#btn-primary");
var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector("#error-message");

var availableNotes = ["2000", "500", "200", "100", "50", "20", "10", "1"];

btnPrimary.addEventListener("click", function validateBillAmount() {
  if (billAmount > 0) {
    console.log("ok");
    // if (cashGiven > billAmount) {
    // } else {
    //   console.log("Do you want to wash dishes and ?");
    // }
  } else {
    console.log("Do you want to wash dishes?");
  }
});

// function showMessage(msg) {
//   message.style.display = "block";
// }
