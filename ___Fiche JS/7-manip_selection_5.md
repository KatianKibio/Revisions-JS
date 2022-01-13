JS - Manip/Sélection : Manipuler le style CSS

font-size devient fontSize
border-right-style devient borderRightStyle

	variable.style.fontWeight

⚠️ l'attribut style ne permet pa s d'accéder aux valeurs des propriétés définies dans la feuille de style.
Il permet d'accéder seulement aux propriétés définies dans le document HTML ou via style.

Pour accéder aux valeurs du style : la méthode getComputedStyle de l'objetq window

getComputedStyle permet d'obtenir un objet regroupant l'ensemble des valeurs des propriétés CSS 
appliquées par le navigateur pour un élément

les propriétés CSS
	🗨️ "IDEM " -> font-size devient fontSize
	🗨️ pas de raccourci autorisé margin -> marginLeft,...
	🗨️ sont en lecture seul
	🗨️ s'exprime en unité absolu

-----------------------------------------------------------------------------------------------------------------------------------------

RESUME
getComputedStyle -> accéde aux valeurs
style -> modifie les valeurs
	