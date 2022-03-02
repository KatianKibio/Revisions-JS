// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Première manière d'écrire les composant - approche fonctionnelle

function Welcome({ name }) {//la destructuration
    console.log(name);
    return <h1>Bonjour {name}</h1>//la destructuration
}
ReactDOM.render(<Welcome name="Etienne" />, document.querySelector('#app'))



function Salut({ name, children }) {//la destructuration
    console.log(name);
    return <div>
        <h1>Salut {name}</h1>
        <p>
            {children}
        </p>
    </div>
}
ReactDOM.render(<Salut name="Paul">Bonjour tout le monde</Salut>, document.querySelector('#app2'))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Seconde manière d'écrire les composant - structure sous forme de class

function WelcomeFunc({ name, children }) {//la destructuration
    return <div>
        <h1>Salut {name}</h1>
        <p>
            {children}
        </p>
    </div>
}
//Creer une nouvelle class
class Welcome2 extends React.Component {//On étends la class pour lui dire de fonctionner comme un composant React

    /*
        constructor (props) {
            super(props)
            console.log(props)
        }
    */

    // a l'intérieur il faut nécessairement une fonction nommé render
    // qui s'occupera du rendu et retournera un élément
    render() {
        console.log(this.props);
        return <div>
            <h1>Salut {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>//Les propriétés sont récupérable par this.props
    }
}

ReactDOM.render(<Welcome2 name="Paul">Bonjour tout le monde</Welcome2>, document.querySelector('#app3'))


//++++++++++++++++++++++++++++++++++++++
function Home() {
    return <div>
        <Welcome2 name="Dorothée" />
        <Welcome2 name="Jhonny" />
    </div >
}

ReactDOM.render(<Home />, document.querySelector('#app4'))