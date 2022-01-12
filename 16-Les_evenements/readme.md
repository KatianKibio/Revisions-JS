------- VU -----------------------------
Faire changer de couleur au click (switcher)
CSS - > cursor:pointer;
document.addEventListener('click', laFonction)  =  document.onclick = laFonction
------------------------------------
EVENT objet qui est générer et fourni en parametre

l'Objet Event -- quelques attributs

   × type /* le type de l'évenement

   × clientX, clientY - screenX, screenY - pageX, pageY
    /*coodonnées de l'événement par rpaport au navigateur - ecran - page

   × altkey, ctrKey, shiftKey l'une des touches Alt, Ctrl ou Shift était pressée lors de l'évenement ?

   × key /* informations sur la touche appuyée

   × target /* la cible de l'évenemnt (==this)
        ø var element = event.target
        - element.style.color

        ø this.style.color

   × timestamp /* le moment de création de l'évenement 

   × etc
------------------------------------
THIS

La variable this