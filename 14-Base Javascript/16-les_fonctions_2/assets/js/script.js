// Les fonctions en JavaScript

/*var saw_thanks = () => {
    console.log("Bienvenue dans notre première fonction");
    console.log("Bienvenue dans notre première fonction");
    console.log("Bienvenue dans notre première fonction");
}


function table_multiplication() {
    for (let index = 0; index < 13; index++) {
        console.log(`3 x ${index} = ${index*3}`);
    }
}*/

var table_multiplication = (nombre, limit = 5) =>{
    if(typeof(limit) !== "number"){
        limit = 5;
    }
    if( nombre && typeof(nombre)=== "number"){
        for (let index = 0; index <= limit; index++) {
            console.log(`${nombre} x ${index} = ${index*nombre}`);
        }
    }else{
        console.log("Le paramètre doit être un nombre.");
    }
}