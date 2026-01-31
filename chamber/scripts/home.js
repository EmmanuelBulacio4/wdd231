//HTML ELEMENT SELECTION
const myTown = document.querySelector('#town');
const myGraphic = document.querySelector('#graphic'); 
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');

//URL
const lat = -24.79;
const lon = -65.44;
const apiKey = "902647b55a8f06d112512d2e9c5051f8";

const saltaCoord = '//api.openweathermap.org/data/2.5/weather?lat=-24.79&lon=-65.44&appid=902647b55a8f06d112512d2e9c5051f8&units=metric';

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


// para mostrar 3 miembros de nivel plata u oro hay que
const saltaFore = `https://api.openweathermap.org/data/2.5/forecast?lat=-24.79&lon=-65.44&exclude=current,minutely,hourly,alerts&appid=&appid=902647b55a8f06d112512d2e9c5051f8&units=metric`;

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');


async function forecastWeather(saltaFore) {
    try{
        const response = await fetch(saltaFore);
        if (response.ok) {
            const dataFore = await response.json();
            console.log(dataFore);
            DisplayForecast(dataFore);
        }
        else{
            throw error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

forecastWeather(saltaFore);

function DisplayForecast(dataFore) {
    // myTown.innerHTML = data.name;
    one.textContent = dataFore.daily[1].temp.day;
    two.textContent = dataFore.daily[2].temp.day;
    three.textContent = dataFore.daily[3].temp.day;
    
}
