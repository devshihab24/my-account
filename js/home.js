document.querySelector("#add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    const addMoney = getInputValueById("input-money");
    const pinNumber = getInputValueById("input-pin");

    if(isNaN(addMoney) || isNaN(pinNumber)){
        alert("Invalid Input!");
        document.querySelector("#input-money").value = "";
        document.querySelector("#input-pin").value = "";
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById("balance");
        
        let newBalance = balance + addMoney;
        document.querySelector("#balance").innerText = newBalance;
        document.querySelector("#input-money").value = "";
        document.querySelector("#input-pin").value = "";

        const p = document.createElement("p");
        p.innerText = `Money added: ${addMoney} Tk. New Balance: ${newBalance} Tk.`
        document.getElementById("transaction-section").appendChild(p)
    }
    else{
        alert("Wrong Pin Number!")
    }
})

document.querySelector("#cash-out-btn").addEventListener("click", function(event){
    event.preventDefault();
    const cashOut = getInputValueById("input-money-out");
    const pinNumber = getInputValueById("input-pin-out");

    if(isNaN(cashOut) || isNaN(pinNumber)){
        alert("Invalid Input!");
        document.querySelector("#input-money-out").value = "";
        document.querySelector("#input-pin-out").value = "";
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById("balance");
        if(cashOut > balance){
            alert("You haven't enough money to cash out!");
            document.querySelector("#input-money-out").value = "";
            document.querySelector("#input-pin-out").value = "";
            return;
        }
        let newBalance = balance - cashOut;
        document.querySelector("#balance").innerText = newBalance;
        document.querySelector("#input-money-out").value = "";
        document.querySelector("#input-pin-out").value = "";

        const cashOutHistory = document.createElement("div");
        cashOutHistory.classList.add("bg-yellow-200")
        cashOutHistory.innerHTML = `
        <h3 class"text-4xl font-bold">Cash Out</h3>
        <p>${cashOut} Tk. New balance ${newBalance} Tk.</p>
        `
        document.getElementById("transaction-section").appendChild(cashOutHistory)
    }
    else{
        alert("Wrong pin number!")
    }
})