const sumar = (operador1, operador2) => {
    if(typeof operador1 != "number"){
        throw new Error();
    }
    if(typeof operador2 != "number"){
        throw new Error();
    }
    return operador1 + operador2;
}

module.exports = {
    sumar
}