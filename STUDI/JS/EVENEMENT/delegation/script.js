//
// recupère tout ce qui est dans #event qui est p mais qui est pas .no-event
// const element = document.querySelector('#event p:not(.no-event')
const element = document.getElementById('event')

element.addEventListener('click', (e) => {
    let initElem = e.target // récupérer l'élem sur lequel ont a cliqué avec e.target
    if (initElem.className == 'no-event') {
        return // on ne fais rien
    }
    //sinon
    alert('Actif seulement sur délégation 2')

})