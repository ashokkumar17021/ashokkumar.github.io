let statusCheck = document.getElementById("status");
let myFormEl = document.getElementById("myForm");
let continueBtn = document.getElementById("continueBtn");


continueBtn.onclick = function() {
    statusCheck.textContent = "Order Succefully Placed!";
    statusCheck.style.color = "green";
    statusCheck.classList.add("status-for-payment");
}


myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});