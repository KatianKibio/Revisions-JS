
---------- VU -----------------
les noeuds sont de type node
parents / freres / enfants
les fonctionnalités de manipulation des noeuds
propriétés
------------------------------------
CREATION DE NOEUDS

    × document.createElement(balise)
    × document.createTextNode(text)

    × node.cloneNode(bool)
        bool = true , clone tous les descendant
        bool = false , clone seulement le noeud

------------------------------------
INSERTION DE NOEUDS

    × noeudParent.insertBefore(noeud, noeudRéférence)
        insert noeud avant noeudRéférence comme fils de noeudParent

    × parent.appendChild(noeud)
        noeud est ajouté à la fin des fils de parent

nb : si le noeud inséré ou ajouté existe déjà dans le document,
il est déplacé , donc supprimé de la position
existante et inséré / ajouté à la position demandée

------------------------------------
SUPPRESION / REMPLACEMENT DE NOEUDS

    × parent.removeChild(noeud)

    × parent.replaceChild(remplaçant, rempacé)

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
PROPRIETE D'UN OBJET node

    × nodeName ............le nom du noeud
    × nodeType ...............le type du noeud défini par des constantes nommées prédéfinies,
        node.ELEMENT_NODE .......(=1)
        node.TEXT_NODE .......(=3)
    × nodeValue : null .......................si ce noeud est un noeud élément, le contenu pour un noeud texte
    × parentNode ......................son noeud parent
    × childNodes ......................liste de ses noeuds enfants
    × firstChild , lastChild .................1er , dernier de ses noeuds enfants
    × previousSibling , nextSibling ..............noeud grère préc ou suiv
    × etc