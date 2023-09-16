import { Invoice } from './classes/Invoice.js';


const invoiceOne: Invoice = new Invoice("mario","working on mario website", 250 );
const invoiceTwo: Invoice = new Invoice("luigi","working on luigi website", 400);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((invoice) =>{
    console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;


//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) =>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

