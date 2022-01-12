var elementNode = (name)=>{ //ma fonction elementNode
    if(name && typeof(name) === "string"){
       return document.createElement(name) // createElement = creer un noeud
    }
    return null
}
var textNode = (name)=>{ //ma fonction textNode
    if(name && typeof(name) === "string"){
       return document.createTextNode(name) // createTextNode = creer du texte
    }
    return null
}
//var ul = document.createElement('ul')
var ul = elementNode("ul")
for (let index = 1; index < 9; index++) {
    let li = elementNode("li")
    //definition du style
    li.style.fontSize = "1.5rem"
    li.style.color = "brown"
    li.style.fontWeight = "bold"
    // ------------------------
    let content = textNode("Élément Javascript N°"+index)
    li.appendChild(content) // appendChild ajoute un noeud enfant à content
    ul.appendChild(li) // ajoute un noeud enfant (ici à li)
}

console.log(ul);
//dans app j'ajoute ul
document.getElementById("app").appendChild(ul)