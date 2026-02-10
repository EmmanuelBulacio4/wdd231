const message = document.getElementById('toUsermsg');

const dataOnLS = localStorage.getItem('lastVisit');

const now = Date.now();  //El tiempo esta en milisegundos

if (dataOnLS === null) {
    localStorage.setItem('lastVisit', now);
    message.textContent = "We’re glad to see you!";
} else {
    const lastVisit = Number(dataOnLS);

    const msPerDay = 1000*60*60*24;

    const difference = Math.floor((now - lastVisit) / msPerDay);

    if (difference < 1) {
        message.textContent = "Great! You’re back so soon!!";
    } else if (difference === 1) {
        message.textContent = "You were here 1 day ago.";
    } else {
        message.textContent = `You were here ${difference} days ago.`;
    }

    // Actualizamos la última visita
    localStorage.setItem('lastVisit', now);
}
