

const newMember = new URLSearchParams(window.location.search);



document.querySelector('#message').innerHTML = `
    <p>Application submission from ${newMember.get('name')} ${newMember.get('surname')}</p>
    <p>The ${newMember.get('title')} of ${newMember.get('organization')}</p>
    <p> Phone: ${newMember.get('phone')} </p>
    <p>Email: ${newMember.get('email')}</p>
    <p>Business Description: ${newMember.get('description')}</p>`