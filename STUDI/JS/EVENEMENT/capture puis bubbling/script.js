const parent = document.getElementById('parent')
const child = document.getElementById('child')
// Affiche parent uniquement
parent.addEventListener('click', () => {
    alert('parent')
})
// Affiche enfant puis parent
child.addEventListener('click', () => {
    alert('child')
})

//------------------STOP PROPAGATION-----------------------
const pere = document.getElementById('pere')
const fils = document.getElementById('fils')

pere.addEventListener('click', () => {
    alert('père')
})
fils.addEventListener('click', (e) => {
    e.stopPropagation()//empéche la detection de du parent "pere" // arrete la phase de bubbling ici
    alert('fils')
})

//------------------3EME PARAM-----------------------
const mere = document.getElementById('mere')
const fille = document.getElementById('fille')

mere.addEventListener('click', () => {
    alert('mère')
}, true)
//Affiche parent puis enfant (sens inverse)
fille.addEventListener('click', () => {
    alert('fille')
}, true)