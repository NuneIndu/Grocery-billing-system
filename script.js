// Auto Bill Number
let billNumber = Math.floor(100000 + Math.random() * 900000);
document.getElementById("billNo").innerText = billNumber;

function generateBill() {
    let items = [
        {name: "Rice", price: 50, qty: rice.value},
        {name: "Sugar", price: 40, qty: sugar.value},
        {name: "Milk", price: 30, qty: milk.value},
        {name: "Oil", price: 120, qty: oil.value},
        {name: "Soap", price: 35, qty: soap.value}
    ];

    let total = 0;
    let billText = "GROCERY STORE\n";
    billText += "Bill No: " + billNumber + "\n";
    billText += "-----------------------------\n";
    billText += "Customer: " + customer.value + "\n\n";
    billText += "Item      Qty   Amount\n";

    items.forEach(item => {
        if (item.qty > 0) {
            let cost = item.qty * item.price;
            total += cost;
            billText += `${item.name.padEnd(9)} ${item.qty}   ₹${cost}\n`;
        }
    });

    billText += "-----------------------------\n";
    billText += "TOTAL: ₹" + total;

    bill.value = billText;
}

function printBill() {
    if (bill.value === "") {
        alert("Please generate the bill first!");
        return;
    }
    window.print();
}

function clearBill() {
    bill.value = "";
    customer.value = "";
    document.querySelectorAll("input[type=number]").forEach(i => i.value = "");
}
