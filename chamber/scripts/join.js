// ----------SUBMIT DATE----------

let submitTime = new Date;
document.querySelector("submit-date").textContent = submitTime.toLocaleString();

// ----------PARAMETERS----------



// ----------DIALOG----------
const myModal = document.getElementById('dialog');
const closeButton = document.getElementById('closeModal');
closeButton.addEventListener(("click"), () => myModal.close());

const dialog1 = document.getElementById("details-np");
const dialog2 = document.getElementById();
const dialog3 = document.getElementById();
const dialog4 = document.getElementById();

const mtitle = document.getElementById('modaltitle');
const modalDetails = document.getElementById('modalinfo');

// Dialog 1
dialog1.addEventListener(("click"), () => {
    mtitle.textContent = "";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li></li>
            <li></li>
        </ul>
        <p><strong>Cost: </strong></p>
    `
});

// Dialog2

dialog2.addEventListener(("click"), () => {
    mtitle.textContent = "";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li></li>
            <li></li>
        </ul>
        <p><strong>Cost: </strong></p>
    `
});

// Dialog3

dialog3.addEventListener(("click"), () => {
    mtitle.textContent = "";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li></li>
            <li></li>
        </ul>
        <p><strong>Cost: </strong></p>
    `
});

// Dialog4

dialog4.addEventListener(("click"), () => {
    mtitle.textContent = "";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li></li>
            <li></li>
        </ul>
        <p><strong>Cost: </strong></p>
    `
});