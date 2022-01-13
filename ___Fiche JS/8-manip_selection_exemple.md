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