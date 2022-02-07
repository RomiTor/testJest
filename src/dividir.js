const dividir = (operador1, operador2) => {
    if(typeof operador1 != "number" || typeof operador2 !== "number" || typeof operador2 === 0){
        throw new Error ("Error");
    }
    return operador1 / operador2
}

module.exports = {
    dividir
}