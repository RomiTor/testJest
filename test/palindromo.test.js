const {palindromo} = require("../src/palindromo")

describe ("Función palindromo", () => {
    it("reconocer va a retornar true", () => {
        //arrange
        const someString = "reconocer";

        //act
        const resultado = palindromo(someString);

        //assert
        expect(resultado).toBe(true);
    });

    it("hola va a retornar false", () => {
        //arrange
        const someString = "hola";

        //act
        const resultado = palindromo(someString);

        //assert
        expect(resultado).toBe(false);
    });

    it("No ingresar parámetros va a arrojar error", () => {
        expect(() => palindromo()).toThrow("Error");
    })

    it("Ingresar un número va a arrojar error", () => {
        //arrange
        const someString = 1;

        //act
        const expectedResult = () => palindromo(someString)
        
        //assert
        expect(expectedResult).toThrow("Error");
    })
});