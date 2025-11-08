const container = document.querySelector('#member-dir');

async function getMembers(){
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members.directory);
}

const displayMembers = (members) => {
    members.forEach(member => {    //hago un forEach para iterar por cada miembro

        // Creo los elementos HTML para luego mostrarla en la web
        let card = document.createElement('section');
        card.classList.add('member');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        // let level = document.createElement('p');
        // // let info = document.createElement('p');

        //Asigno los valores que tiene cada miembro a las etiquetas anteriores
        name.textContent = `${member.name}`;
        address.textContent = `${member.addresses}`;
        phone.textContent = `${member.phone}`;
        // website.textContent = `${member.website}`;
        website.textContent = "WebSite";
        image.setAttribute("src", "");
        image.setAttribute("alt", "Main image of the member");
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "");
        image.setAttribute("height", "");
        // level.textContent = `${member.level}`;
        // info.textContent = `${member.info}`;

        //Agrego los elementos anteriores a la section (line 15)
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        //Ahora la card la agrego al container que es la variable que tiene el div donde se mostraran los miembros
        container.appendChild(card);
    });
}

getMembers();

//CHANGE BETWEEN GRID AND LIST

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
    gridbutton.classList.add("active")
    listbutton.classList.remove("active");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
    gridbutton.classList.remove("active")
    listbutton.classList.add("active");
})