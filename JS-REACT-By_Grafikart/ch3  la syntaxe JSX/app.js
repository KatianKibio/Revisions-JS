let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3',
    ]
    const lis = items.map(item => <li>{item}</li>)//je peux aussi le mettre directement dans le <ul> voir en bas
    //La balise div aide à avoir qu'une seule racine
    //pour que le JSX soit valide
    //on peut aussi utiliser la balise <React.Fragment> </React.Fragment>
    //a la place de <div>
    const title = <React.Fragment><h1 className="title" id="title">
        
        Bonjour les gens <span>{n}</span>
    </h1>
    <ul>
        {lis}
        ------------------------
        {items.map(item => <li>{item}</li>)}
        ------------------------
        {items.map((item, k) => <li key={k}>{item}</li>)}{/*avec une key prop*/}
    </ul>
    </React.Fragment>
    //ESSAYER SES CODES EN REMPLACEMENT DE CEUX DI-DESSUS
    //<h1 className="title" id={"title" + n}>  // l'id change (voir par l'inspecteur f12)
    //Bonjour les gens <span>{n % 2 ? numberFormat(n) : null}</span>

    ReactDOM.render(title, document.querySelector('#tab'))
}

render()
window.setInterval(() => {
    n++
    render()
}, 1000)

function unTableau() {/*les tableau creer une concaténation*/
    const tableau =   <p>
    Exemple avec un tableau <span>{['pomme', 'orange']}</span>
    </p>

    ReactDOM.render(tableau, document.querySelector('#tab'))
}

unTableau()