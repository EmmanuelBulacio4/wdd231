const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&&units=metric&appid=902647b55a8f06d112512d2e9c5051f8';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `${data._____}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', _____);
    weatherIcon.setAttribute('___', _____);
    captionDesc.textContent = `${desc}`;
}



// {
//     "coord": {
//         "lon": 6.64,
//             "lat": 49.75
//     },
//     "weather": [
//         {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02d"
//         }
//     ],
//         "base": "stations",
//             "main": {
//         "temp": 1.22,
//             "feels_like": -0.64,
//                 "temp_min": 1.22,
//                     "temp_max": 1.22,
//                         "pressure": 1027,
//                             "humidity": 80,
//                                 "sea_level": 1027,
//                                     "grnd_level": 991
//     },
//     "visibility": 10000,
//         "wind": {
//         "speed": 1.69,
//             "deg": 215,
//                 "gust": 2.11
//     },
//     "clouds": {
//         "all": 11
//     },
//     "dt": 1763809517,
//         "sys": {
//         "type": 2,
//             "id": 2091389,
//                 "country": "DE",
//                     "sunrise": 1763794592,
//                         "sunset": 1763826179
//     },
//     "timezone": 3600,
//         "id": 6554291,
//             "name": "Trier",
//                 "cod": 200
// }

