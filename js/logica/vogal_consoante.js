function vogalconsoante(valor1) {
    const vogalA = "A"
    const vogalE = "E"
    const vogalI = "I"
    const vogalO = "O"
    const vogalU = "U"
    const vogal = "VOGAL"

    valor1 = valor1.toUpperCase()

    if (vogalA === valor1) {
       return resultado(vogal, null, null);
    }

    if (vogalE === valor1) {
        return resultado(vogal, null, null);
    }
    
    if (vogalI === valor1) {
        return resultado(vogal, null, null);
    }
    
    if (vogalO === valor1) {
        return resultado(vogal, null, null);
    }

    if (vogalU === valor1) {
        return resultado(vogal, null, null);
    }

    return resultado("CONSOANTE", null, null);

}