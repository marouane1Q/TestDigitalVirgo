function magic_inc(nombre, operation) {
    valeur = nombre.toString();
    console.log(valeur);
    //Incrémenter 
    if (operation == "inc" && valeur[1] === ".") {
        lastIndex = valeur.charAt(valeur.length - 1);
        lastNumber = Number(lastIndex);
        valeur = valeur.replace(lastNumber, (lastNumber + 1));
    }
    else if (operation == "inc" && valeur[2] === ".") {
        valeur = Number(Math.ceil(valeur)) + 1;
    }
    else if (operation == "inc" && valeur.length === 1) {
        valeur = Number(Math.ceil(valeur)) + 1;
    }
    else if (operation == "inc" && valeur.length === 2) {
        valeur = Number(Math.ceil(valeur)) + 10;
    }
    else if (operation == "inc" && valeur.length === 3) {
        valeur = Number(Math.ceil(valeur)) + 100;
    }
    else if (operation == "inc" && valeur.length === 4) {
        valeur = Number(Math.ceil(valeur)) + 1000;
    }
    //Décrémenter 
    if (operation == "dec" && valeur[1] === ".") {
        lastIndex = valeur.charAt(valeur.length - 1);
        lastNumber = Number(lastIndex);
        valeur = valeur.replace(lastNumber, (lastNumber - 1));
    }
    else if (operation == "dec" && valeur[2] === ".") {
        valeur = Number(Math.ceil(valeur)) - 1;
    }
    else if (operation == "dec" && valeur.length === 1) {
        valeur = Number(Math.ceil(valeur)) - 1;
    }
    else if (operation == "dec" && valeur.length === 2) {
        valeur = Number(Math.ceil(valeur)) - 10;
    } 
    else if (operation == "dec" && valeur.length === 3) {
        valeur = Number(Math.ceil(valeur)) - 100;
    } 
    else if (operation == "dec" && valeur.length === 4) {
        valeur = Number(Math.ceil(valeur)) - 1000;
    }
    return valeur;
}
//If plus qu'une valeur dans le résultat
// function limite(t,operation) {
//     let array = [];
//     var resultat = t;
//     for (let index = 0; index < 30; index++) {
//         array.push(test(resultat, operation))
//         resultat = array[array.length - 1]
//     }
//     console.log(array)
// }