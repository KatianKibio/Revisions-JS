------------- LES ÉVÉNEMENTS -----------------------------


CAPTURE & BUBBLING (bouillonement)

    PHASE DE CAPTURE :
    Lorsqu'un événement est déclenché, JavaScript parcourt l'ensemble du code en partant de l’ancêtre le plus haut (html) et descend jusqu'à l'élément ayant déclenché l’événement. On appelle ça la phase de capture.

    PHASE DE BOUILLONEMENT :
    Une fois la phase de capture finie, JavaScript parcourt le code en sens inverse, et ce n'est qu'à ce moment qu'il déclenche l’événement lorsqu'il le croise. On appelle cette action la phase de bouillonnement.

    MODIFICATION DU COMPORTEMENT :

    METHODE N° 1 : event.stopPropagation()
        -> Cette méthode vient se positionner à l'intérieur de la fonction de callback de l’élément écouteur.
        -> va annuler la phase de bouillonnement à partir du moment où le code rencontrera l'instruction.
        -> Ainsi, l’événement ne remontera pas jusqu'à la div parent.

        exemple :

        const parent = document.getElementById('parent');
        const children = document.getElementById('children');

        parent.addEventListener('click', () => {
            alert('parent')
        })

        // event en parametre de la fonction de callback représente l'évènement.
        children.addEventListener('click', (event) => {
            event.stopPropagation();
            alert('children')
        })

    METHODE N° 2 : addEventListener('event', callback, capture?)
    -> Execution du code pendant la phase de capture
    -> Annulation du bouillonement -

        modification du 3ème paramètre optionnel de la méthode document.addEventListener() et de la passer à true. Dans ce cas, le code exécutera l'événement durant la phase de capture et annulera la phase de bouillonnement.

        exemple :

        const parent = document.getElementById('parent');
        const children = document.getElementById('children');

        parent.addEventListener('click', () => {
            alert('parent')
        }, true)

        children.addEventListener('click', () => {
            alert('children')
        }, true)

        Dans le cas présent, on ignore la phase de bouillonnement et les événements sont exécutés pendant la phase de capture. Ainsi, en cliquant sur children, l'alerte parent s'affichera en premier, puis l'alerte children en second. Le comportement est inversé.

--------------------------------------------------------------------------

PROPRIÉTÉS

    event.target ---> cible de l'événement
    event.defaultPrevented ---> indique si le comportement par défaut doit être annulé
    event.bubbles ---> sens de propagation d'un événement

--------------------------------------------------------------------------

MÉTHODES

    event.createEvent()
    event.preventDefault()
    event.stopPropagation()

--------------------------------------------------------------------------

AJOUT / SUPPRESSION EVENEMENTS

    addEventListener()
        paramètres obligatioire : type ; listener
        paramètres facultatif : options :
            capture ; once ; passive (des booléens)

    remoteEventListener() 
        Supprimer un eventListener quand on en a plus besoin est une excellente pratique, car il peut être coûteux pour le navigateur qui doit observer un nœud de DOM supplémentaire.

--------------------------------------------------------------------------

DELEGATION D'ÉVÉNEMENTS

La délégation d'événement est une pratique consistant à lier un événement non pas sur l'élément ciblé, mais sur l'un de ses ancêtres. La délégation est très utile dans le cas où nous souhaitons lier un événement sur un élément de DOM qui n'existe pas encore au moment du chargement de la page, comme par exemple un bouton qui serait ajouté dynamiquement au DOM par une action de script. Créer un événement sur cet élément à l'aide de addEventListener au chargement de la page ne fonctionnera pas. Il est alors nécessaire de modifier la syntaxe de addEventListener pour créer une délégation.

    exemple html :
    
    <body> 
        <div id="event"> 
            <p>délégation des événements</p> 
        </div> 
    </body>

    Si nous plaçons un événement click sur la div, le clic sur le texte du paragraphe <p> déclenchera l'événement, bien que ce dernier cache la div. Ceci est rendu possible grâce à la délégation d'événement.

    Imaginons que l'on souhaite définir un événement en cliquant sur l'un des paragraphes de la div. Au lieu de lier autant d'événements que de <p>, nous pourrons n'en définir qu'un seul et le placer directement sur la div.

    <body> 
    <div id="event"> 
        <p class="no-event">délégation des événements 1</p>
        <p>délégation des événements 2</p> 
        <p class="no-event">délégation des événements 3</p> 
    </div> 
    </body>

    code js :

    var element = document.getElementById('event')

    element.addEventListener('click', function(e) {
      var initElem = e.target;
        if(initElem.className == 'no-event'){
            return;
        }
        alert("Actif seulement sur Délégation 2")
    })


--------------------------------------------------------------------------

EVÉNEMENTS GLOBAUX
---> Non lié à une interaction avec l'user mais avec une action de script
    
    load
    offline
    abort
    ended
    success

EVÉNEMENTS SOURIS

    click
    dblClick
    mouseenter ---> au pointage de la souris
    mouseleave ---> qd la souris sors d'un élément
    mouseup ---> relache du bouton de la souris

    !!! éviter mouseover & mouseout (qui seront déclenché autant de x qu'il y a de descendants)

EVÉNEMENTS CLAVIERS

    keyup
    keydown

    !!! L'utilisation de l'événement keypress est à proscrire, car il ne fonctionne pas pour toutes les touches du clavier (Alt, Ctrl, Shift, par exemple). 

EVÉNEMENTS DE FORMULAIRES

    change
    focus
    blur
    submit

--------------------------------------------------------------------------

BONNES PRATIQUES

    Mal utilisés, les événements en JavaScript peuvent consommer beaucoup de ressources navigateur.
    Pour éviter ces comportements, nous pouvons coupler le déclenchement de nos événements avec les fonctions

    debounce() & throttle()

    "Pour résumer, debounce va bloquer l'exécution d'une fonction, alors que throttle va l'exécuter après un certain délai."

    exemples : 

    button.addEventListener('click', debounce(function(event){
        alert('Click')
    }, 2000))

    button.addEventListener('click', throttle(function(event){
        alert('Click')
    }, 5000))

--------------------------------------------------------------------------

ÉVÉNEMENT PERSONALISÉ

Méthode 1 : le constructeur Event
    new Event('monEvenement')

    exemple :

        var myEvent = new Event('personnalEvent')

    déclenchement programmatique de l'événement :

        element.dispatchEvent(myEvent)


Méthode 2 : le constructeur CustomEvent
    new CustomEvent('monEvenementCustom', {detail : { 'tag': 'énénement custom'} })

    var event = new CustomEvent('personnalEvent', { detail : { 'myData': 'mon événement perso'} })
    var element = document.getElementById('navbar')

    element.addEventListener('personnalEvent', displayMe)

    element.dispatchEvent(event)

    function displayMe(e) {
        console.log(e.detail.myData)
    }