<!-- CONSIDERANT CE BOUT DE CODE -->
<div class="form-line" id="first-line" >
    <label for="username">Username : </label> <br>
    <input type="text" name="myName" id="username">
</div>

<!-- creation de l'objet formLine -->
var formLine = document.querySelector('.form-line')

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

<!-- manipuler le contenu des éléments -->

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
