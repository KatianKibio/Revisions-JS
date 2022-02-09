
//ctx pour context

const Canvas = document.getElementById('drawing')
const Ctx = Canvas.getContext('2d')//on defini le context 2D
//fonctions sur ctx
Ctx.fillRect(20, 20, 100, 100)//x,y,largeur, hauteur
Ctx.strokeRect(100, 100, 100, 100)
Ctx.clearRect(70, 70, 100, 100)

// -----------------------------------------------------------
const CanvasForPath = document.getElementById('path')
const CtxForPath = CanvasForPath.getContext('2d')
//fonctions sur CtxForPath
CtxForPath.beginPath()
/*TETE */
CtxForPath.arc(75, 75, 50, 0, Math.PI * 2)//x, y, rayon du cercle, angle de depart, angle d'arrivé
CtxForPath.fillStyle = 'yellow'
CtxForPath.fill()
CtxForPath.moveTo(110, 75)//x, y
/*SOURIRE */
CtxForPath.arc(75, 75, 35, 0, Math.PI)
CtxForPath.moveTo(65, 65)
/*OEIL GAUCHE */
CtxForPath.arc(60, 65, 5, 0, Math.PI * 2)
CtxForPath.moveTo(85, 65)
/*OEIL DROIT CLEIN D'OEIL */
CtxForPath.lineTo(98, 65)//x, y coordoné de fin de ligne
/* EPAISSEUR LIGNE */
CtxForPath.lineWidth = 4
/* COULEUR LIGNE */
CtxForPath.strokeStyle = 'red'
/*VISIBILITE */
//CtxForPath.fill()
CtxForPath.stroke()
CtxForPath.closePath()
// -----------------------------------------------------------
// DEGRADE /////////////////////
const LinearGradient = CtxForPath.createLinearGradient(20, 170, 120, 270) //x, y -> depart,  x, y -> arrivée
LinearGradient.addColorStop(0, '#ff4757')//0 = debut dégradé
LinearGradient.addColorStop(1, '#5352ed')//1 = fin dégradé
CtxForPath.fillStyle = LinearGradient
CtxForPath.fillRect(20, 170, 100, 100)
// OMBRE /////////////////////
CtxForPath.shadowColor = 'gray'
CtxForPath.shadowBlur = 10
CtxForPath.shadowOffsetX = 8
CtxForPath.shadowOffsetY = 8
CtxForPath.fillRect(140, 170, 100, 100)


// -----------------------------------------------------------
// TEXTE /////////////////////

const CanvasForText = document.querySelector('#texte')
const CtxForText = CanvasForText.getContext('2d')
CtxForText.fillStyle = 'green'
CtxForText.strokeStyle = 'red'
CtxForText.textAlign = 'center'
CtxForText.font = '50px Mono'
CtxForText.fillText('Texte', 150, 150)
CtxForText.strokeText('Texte', 150, 100)

// -----------------------------------------------------------
// UNE IMAGE /////////////////////
const CanvasForImage = document.querySelector('#image')
const CtxForImage = CanvasForImage.getContext('2d')
window.onload = () => {
    const MyImage = new Image(400, 400)

    MyImage.onload = () => {
        CtxForImage.drawImage(MyImage,5, 5, 400, 400)//l'Objet image, x, y , taille L ,taille H
    }
    MyImage.src = '15.jpg'
}

// -----------------------------------------------------------
// TRANSFORMATION /////////////////////

const Transform = document.getElementById('transformation')
const CtxTransform = Transform.getContext('2d')

CtxTransform.fillStyle = 'lightblue'
CtxTransform.fillRect(50, 50, 100, 100)

// decaler les elems suivant apres l'appel a cette fonction translate
CtxTransform.translate(100, 0)

CtxTransform.fillStyle = 'lightpink'
CtxTransform.fillRect(50, 175, 100, 100)

CtxTransform.fillStyle = 'lightgreen'
CtxTransform.fillRect(50, 300, 100, 100)

//rotation de l'elems
CtxTransform.rotate(45 * Math.PI / 180)
CtxTransform.fillStyle = 'darkgreen'
CtxTransform.fillRect(300, 0, 100, 100)