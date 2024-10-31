// function getInputValueById (){
//     console.log("Input field value function is added")
//     const addMoney = document.querySelector("#input-money").value;
//     return addMoney;
// }


function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}



function showInterfaceById(id){
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cash-out-section").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}