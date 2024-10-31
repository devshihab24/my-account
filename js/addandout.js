const addMoneyBtn = document.querySelector("#add-money");
const cashOutBtn = document.querySelector("#cash-out");
const transactionBtn = document.querySelector("#transaction-btn");
const divider = document.querySelector("#divider")

addMoneyBtn.addEventListener("click", function(){
    divider.classList.remove("hidden")
    showInterfaceById("add-money-section")
})
cashOutBtn.addEventListener("click", function(){
    divider.classList.remove("hidden")
    showInterfaceById("cash-out-section")
})
transactionBtn.addEventListener("click", function(){
    divider.classList.remove("hidden");
    showInterfaceById("transaction-section");
})











// const addMoneyBtn = document.querySelector("#add-money");
// const cashOutBtn = document.querySelector("#cash-out");

// addMoneyBtn.addEventListener("click", function(){
//     document.querySelector("#divider").classList.remove("hidden");
//     document.querySelector("#add-money-section").classList.remove("hidden");
//     document.querySelector("#cash-out-section").classList.add("hidden");
// })
// cashOutBtn.addEventListener("click", function(){
//     document.querySelector("#divider").classList.remove("hidden")
//     document.querySelector("#cash-out-section").classList.remove("hidden");
//     document.querySelector("#add-money-section").classList.add("hidden");
// })