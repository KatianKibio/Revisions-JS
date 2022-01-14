var error = document.getElementById('error');
var zoneTable = document.getElementById('table');

var table = (nb) =>{
    nb = parseInt(nb);

    console.log(nb);
    if(isNaN(nb)){
        error.innerHTML = "Vous devez saisir un nombre !";
        zoneTable.style.display = "none";
        return;
    }

    var index = 0;
    zoneTable.innerHTML = `<h3>Table de multiplication par ${nb}</h3>`;
    while (index < 13) {
        //
        zoneTable.innerHTML += `
        <div class="${ index%2 ? 'impair' : 'pair'}"> 
            <span>${nb}</span> 
            <span>x</span> 
            <span>${index}</span>
            <span> = </span>
            <span>${ index * nb}</span>
        </div>`;

        index++;
    }
    zoneTable.style.display = "block";
}