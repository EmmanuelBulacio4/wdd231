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

