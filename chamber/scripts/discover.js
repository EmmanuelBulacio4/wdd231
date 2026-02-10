import { places } from "../data/places.mjs";

// Aqui van las variables para las tarjetas
const container = document.getElementById('container');

displayPlaces(places);

function displayPlaces(file){
    file.forEach(x => {
        let card = document.createElement('section');  //creo la secion que contendrá los datos
        card.classList.add('memberCard');            //Le asigno a cada section la clase "memberCard"
        
        let imageM = document.createElement('img')
        imageM.setAttribute('src', `${x.image_url}`)
        imageM.setAttribute('alt',x.name)
        card.appendChild(imageM)

        let nameM = document.createElement('h2');
        nameM.textContent = x.name;
        card.appendChild(nameM);

        let addressM = document.createElement('address');
        let descriptionM = document.createElement('p');
        let buttonInfo = document.createElement('button');


        container.appendChild(card)
    });
}
