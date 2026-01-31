//HTML ELEMENT SELECTION
const myTown = document.querySelector('#town');
const myGraphic = document.querySelector('#graphic');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');

const saltaCoord = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.79&lon=-65.44&appid=902647b55a8f06d112512d2e9c5051f8&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(saltaCoord);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch();

//Display
function displayResults(data) {
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', "weather icon")
}


// -----------------FORECAST WEATHER CODE--------------------------

const saltaFore = `https://api.openweathermap.org/data/2.5/forecast?lat=-24.79&lon=-65.44&appid=902647b55a8f06d112512d2e9c5051f8&units=metric`;


async function forecastWeather(saltaFore) {
    try {
        const response = await fetch(saltaFore);
        if (response.ok) {
            const dataFore = await response.json();
            DisplayForecast(dataFore);
        }
        else {
            throw error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function DisplayForecast(dataFore) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const d = new Date();
    const todayIndex = d.getDay();

    const done = document.getElementById('done');
    done.innerHTML = `<strong>${dayNames[(todayIndex + 1) % 7]}:</strong> ${Math.round(dataFore.list[8].main.temp)}°C`;

    const dtwo = document.getElementById('dtwo');
    dtwo.innerHTML = `<strong>${dayNames[(todayIndex + 2) % 7]}:</strong> ${Math.round(dataFore.list[16].main.temp)}°C`;

    const dthree = document.getElementById('dthree');
    dthree.innerHTML = `<strong>${dayNames[(todayIndex + 3) % 7]}:</strong> ${Math.round(dataFore.list[24].main.temp)}°C`;
}

forecastWeather(saltaFore);


//-------------- THREE RAMDON MEMBERS Level 2 or 3------------------

const container = document.querySelector('#spot-members');

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

        //Asigno los valores que tiene cada miembro a las etiquetas anteriores
        name.textContent = `${member.name}`;
        address.textContent = `${member.addresses}`;
        phone.textContent = `${member.phone}`;
        website.textContent = "WebSite";
        image.setAttribute("src", member.image);
        image.setAttribute("alt", "Main image of the member");
        image.setAttribute("loading", "lazy");
        // image.setAttribute("width", "300");
        // image.setAttribute("height", "200");

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
