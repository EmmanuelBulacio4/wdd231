// ----------SUBMIT DATE----------

let submitTime = new Date;
document.querySelector("#submit-date").value = submitTime.toLocaleString();

// ----------PARAMETERS----------



// ----------DIALOG----------
const myModal = document.getElementById('dialog');
const closeButton = document.getElementById('closeModal');
closeButton.addEventListener(("click"), () => myModal.close());

const dialog1 = document.getElementById("details-np");
const dialog2 = document.getElementById("details-b");
const dialog3 = document.getElementById("details-s");
const dialog4 = document.getElementById("details-g");

const mtitle = document.getElementById('modaltitle');
const modalDetails = document.getElementById('modalinfo');

// Dialog 1
dialog1.addEventListener(("click"), () => {
    mtitle.textContent = "Non Profit Membership";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li>Inclusion in our basic online business directory for public visibility.</li>
            <li>Subscription to our monthly newsletter featuring local economic updates and news.</li>
        </ul>
        <p><strong>Cost: </strong>Free</p>
    `;
    myModal.showModal();
});

// Dialog2

dialog2.addEventListener(("click"), () => {
    mtitle.textContent = "Bronze Membership";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li>Non Profits Benefits</li>
            <li>Access to foundational business training workshops and community educational seminars.</li>
            <li>Official digital membership badge to display on your business website and social media.</li>
        </ul>
        <p><strong>Cost: </strong>$100</p>
    `;
    myModal.showModal();
});

// Dialog3

dialog3.addEventListener(("click"), () => {
    mtitle.textContent = "Silver Membership";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li>Bronze Benefits</li>
            <li>Priority placement in regional business search results and the annual digital guide.</li>
            <li>Exclusive discounts on trade show booths and registration for official Chamber events.</li>
        </ul>
        <p><strong>Cost: </strong>$200</p>
    `;

    myModal.showModal();
});


// Dialog4

dialog4.addEventListener(("click"), () => {
    mtitle.textContent = "Golden Membership";
    modalDetails.innerHTML = `
        <p>Benefits:</p>
        <ul>
            <li>Silver Benefits</li>
            <li>Direct business advocacy and representation in regional government and trade discussions.</li>
            <li>VIP invitations to private executive networking sessions with top industry leaders.</li>
        </ul>
        <p><strong>Cost: </strong>$350</p>
    `;
    
    myModal.showModal();
});