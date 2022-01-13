<!-- CONSIDERANT CE BOUT DE CODE -->
<div class="form-line" id="first-line" >
    <label for="username">Username : </label> <br>
    <input type="text" name="myName" id="username">
</div>

<!-- creation de l'objet formLine -->
var formLine = document.querySelector('.form-line')

<!-- ########## ########## ########## ########## ########## ########## ########## -->

<!-- dans la console on peut afficher ses propriétés ainsi -->
formLine.id  ------» first-line
formLine.className ------» form-line ☢️ ATTENTION ☢️ .className et non .name

formLine.querySelector('label') ------» <label for="username">
formLine.querySelector('label').htmlFor ------» "username"

<!-- Autre manière de faire en enregistrant dans une variable -->
var label_a = formLine.querySelector('label')  -----> undefined
label_a --------» <label for="username">
label_a.htmlFor --------» "username"

<!-- ######## GET ATTRIBUTE ########## -->
formLine.getAttribute('class')  <!-- = -->  formLine.className 
            -----» "form-line"
formLine.getAttribute('id')  <!-- = -->  formLine.id 
            -----» "first-line"

<!-- ######## CHANGER LES VALEURS ########## -->
formLine.id = "une-valeur-différente
formLine.className = ""

<!-- ######## CHANGER LES VALEURS --- SET ATTRIBUTE ########## -->
formLine.setAttribute('id', 'ma-nouvelle-valeur)

<!-- ########## MANIPULATION DES CONTENUS DES ELEMENTS ########## -->
CONSIDERANT CE BOUT DE CODE

<h3 class="h3">Titre de taille h3</h3>
<h3 class="h3">le language CSS</h3>  ---> je veux récupérer celui-ci
<h3 class="h3">le language JS</h3>
<!-- Je vais manipuler le h3 -->
var h3_modified = document.querySelectorAll('.h3')[1] --> je récupére le 2em h3

h3_modified.innerHTML = "plus petit sous-titre" ---> idem textContent
h3_modified.textContent = "plus petit sous-titre"  ---> idem innerHTML
h3_modified.innerHTML = "plus <b>petit</b> sous-titre" --> changer le html
    textContent ----> utile pour afficher des bouts de codes html

<!-- MANIPULATION STYLE CSS -->
Ne permet pas de récupérer les valeurs dans une feuille de style CSS
récupère les valeurs dans le fichier HTML

h3_modified.style.color = 'blue'
h3_modified.style.fontSize = 'blue'   ----> camelBack
h3_modified.style.backgroundColor = 'pink'

<!-- exemple de changement de disposition de block-->

CONSIDERANT CE BOUT DE CODE HTML
<div id="threeColor">
  <div id="red"></div>
  <div id="green"></div>
  <div id="blue"></div>
</div>

CONSIDERANT CE BOUT DE CODE CSS
#red, #green, #blue {
    display: inline-block;
  }

var threeColor = document.querySelector('#threeColor')
var blueColor = querySelector.('#blue')
blueColor.style.display ='block'

<!-- ######## GET COMPUTED STYLE ########## -->
Permet de récupérer les valeurs dans une feuille de style CSS
permet d'obtenir un objet ayant tout les valeurs propriété CSS appliquées par le navigateuer pour un élément.
-----------------------------------------------------------
Sur l'objet window.
Les propriété css seront toujours en camelBack
Sont accessible uniquement en lecture seule
s'expriment en unité absolue (px,...)
-----------------------------------------------------------
CONSIDERANT CE BOUT DE CODE CSS
<!-- fichier style.css -->
h1 {
  font-size: 3em;
  background: yellow;
}

window.getComputedStyle(h1) ---> afichera les valeurs par défaut
<!-- come ci-dessous -->
    CSS2Properties(351) { "accent-color" → "auto", "align-content" → "normal", "align-items" → "normal", "align-self" → "auto", "animation-delay" → "0s", "animation-direction" → "normal", "animation-duration" → "0s", "animation-fill-mode" → "none", "animation-iteration-count" → "1", "animation-name" → "none", … }
<!-- afficher une valeur définie -->    
window.getComputedStyle(h1).fontSize
    "48px" ------> affichera la valeur en unité absolue qui que j'ai mis 3em
window.getComputedStyle(h1).backgroundColor
    "rgb(255, 255, 0)" ------> yellow