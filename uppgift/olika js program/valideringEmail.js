function validateEmail(email) {
    // Ta bort mellanslag
    let rensad = email.trim();
    if (!rensad.includes('@')) {
        return false;
    }

    if (rensad.indexOf(' ') !== -1) {
        return false;
        
    }

    return true;
}

console.log(validateEmail ("email@com"));

function nameformating(name) {
    let tmpName = name.toLowerCase().trim();
    let lista = tmpName.split(' ')
    let nyLista = []
    for (let i = 0; i < lista.length; i++); {
        let ord = lista[i];
        ord [0] = ord[0].toUpperCase();
        nyLista.push(ord);
    }
    return nyLista; 
}

validateEmail ("hello@me.com")