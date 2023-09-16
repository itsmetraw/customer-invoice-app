import { Invoice } from './classes/Invoice.js';
var invoiceOne = new Invoice("mario", "working on mario website", 250);
var invoiceTwo = new Invoice("luigi", "working on luigi website", 400);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(function (invoice) {
    console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
});
var form = document.querySelector(".new-item-form");
//inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
