import { places } from "../data/places.mjs";

const container = document.getElementById('container');

function displayPlaces(file){
    file.forEach(x => {
        let card = document.createElement('section');  //creo la secion que contendrá los datos
        card.classList.add('memberCard');            //Le asigno a cada section la clase "memberCard"
        
        let imageM = document.createElement('img')
        imageM.setAttribute('src', `${x.image_url}`)
        imageM.setAttribute('alt',x.name)
        card.appendChild(imageM)

        let nameM = document.createElement('h3');
        nameM.textContent = x.name;
        card.appendChild(nameM);

        let addressM = document.createElement('address');
        addressM.textContent = x.address;
        card.appendChild(addressM);

        let descriptionM = document.createElement('p');
        descriptionM.textContent = x.description;
        card.appendChild(descriptionM);

        let buttonInfo = document.createElement('button');
        buttonInfo.textContent = "More Info";
        card.appendChild(buttonInfo);

        container.appendChild(card)
    });
};

displayPlaces(places);


const message = document.getElementById(toUsermsg);

const dataOnLS = localStorage.getItem('lastVisit');

if (dataOnLS == null){
    localStorage.setItem('lastVisit', Date.now());
    message.innerText = "We´re glad to see you";
}
else{
    let diference = lastVisit - Date.now()/86400000;

}