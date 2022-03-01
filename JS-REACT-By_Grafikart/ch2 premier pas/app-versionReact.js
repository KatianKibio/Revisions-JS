let n = 0
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//param 1: tag ici (h1)
//param 2: option, (ici rien)
//param 3: Les enfants (ici 'Bonjour tout le monde', ' ', 'Jean')
function render() {// GOOD CAR que le span sera modifié
    const title = React.createElement('h1', {},
    'Bonjour tout le monde', ' ', '- React : ',
    React.createElement('span', {}, n)
    )
    //Brancher cette element au niveau de notre DOM
    ReactDOM.render(title, document.querySelector('#app'))
    //param 1: Element React (ici title)
    //param 2: Element dans lequel on souhaote brancher notre element react (icic document.body)
}

render()
window.setInterval(() => {
    n++
    render()
}, 1000)


