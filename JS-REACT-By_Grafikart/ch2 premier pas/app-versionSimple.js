let n = 0

function render() {//MAUVAIS CAR tout le h1 sera modifié - voila pourquoi utiliser react
    document.querySelector('#app').innerHTML = '<h1>Bonjour tout le monde - Simple : <span>' + n + '</span></h1>'
}

render()
window.setInterval(() => {
    n++
    render()
}, 1000)


