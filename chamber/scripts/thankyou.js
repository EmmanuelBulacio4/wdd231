const date = new Date;
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;

let lastModification = new Date;
document.querySelector("#lastModified").textContent = lastModification.toLocaleString();


const newMember = new URLSearchParams(window.location.search);

document.querySelector('#message').innerHTML = `
    <p>Application submittion from: ${newMember.get('name')} ${newMember.get('surname')}</p>
    <p>The ${newMember.get('title')} of ${newMember.get('description')}</p>
`;