
// CAS DU CONSTRUCTEUR EVENT pour des evenement simple
const myEvent = new Event('personnalEvent') //creation d'un evenement tel 'click'; 'load' etc.
const button = document.getElementById('button')

button.addEventListener('personnalEvent', () => {
    console.log('personnalEvent');
})

button.dispatchEvent(myEvent)

// CAS DU CONSTRUCTEUR CUSTOMEVENT pour ajouter des données à l'intérieur

const myEventPlus = new CustomEvent('monEvenementPerso', {
    detail: { data: 'hey' }
}) //creation d'un evenement tel 'click'; 'load' etc.
const button2 = document.getElementById('button2')

const displayMe = (e) => {
    console.log(e.detail.data);
}
button2.addEventListener('monEvenementPerso', displayMe)
//button2.removeEventListener('monEvenementPerso', displayMe)

button2.addEventListener('click', () => {
    button2.dispatchEvent(myEventPlus)
})
