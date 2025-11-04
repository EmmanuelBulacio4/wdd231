const date = new Date;
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;

let lastModification = new Date;
document.querySelector("#lastModified").textContent = lastModification.toLocaleString();
