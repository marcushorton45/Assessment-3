const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

function favColor() {
    alert("My favorite color is blue!")
}

function favPlace() {
    alert("My favorite place is In-N-Out!")
}

function favRitual() {
    alert("I don't what my favorite ritual is...")
}

colorBtn.addEventListener("click", favColor)
placeBtn.addEventListener("click", favPlace)
ritualBtn.addEventListener("click", favRitual)