const performOperation = (operation) => {
    const tal1 = parseInt(document.getElementById("nummer1").value);
    const tal2 = parseInt(document.getElementById("nummer2").value);
    let resultat;

    switch (operation) {
        case 'Addition':
            resultat = tal1 + tal2;
            break;
        case 'Subtraktion':
            resultat = tal1 - tal2;
            break;
        case 'Multiplikation':
            resultat = tal1 * tal2;
            break;
        case 'Division':
            resultat = tal1 / tal2;
            break;
        default:
            resultat = "Invalid operation";
    }

    document.getElementById("resultat").value = resultat;
};

const Addition = () => performOperation('Addition');
const Subtraktion = () => performOperation('Subtraktion');
const Multiplikation = () => performOperation('Multiplikation');
const Division = () => performOperation('Division');
