const { sumar } = require("../src/sumar");
const { restar } = require("../src/restar")
const { multiplicar } = require("../src/multiplicar")
const { dividir } = require("../src/dividir");

//Sumar
describe ("Función sumar", () => {
    it ("sumar 1 + 1, va a retornar 2", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 1;

        //act
        const resultado = sumar (operador1, operador2);

        //assert
        expect(resultado).toBe(2);
    });
    //Sumar error
    it ("sumar a + a va a arrojar error", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 'a';

        //act
        const resultado = sumar(operador1, operador2);

        //assert
        expect(operador1, operador2).toThrow("Error");
    })

    it("sumar a + 1 va a arrojar error", () => {
        //arrange
        const operador1 = 'a';
        const operador2 = 1;
        expect(() => sumar(operador1, operador2)).toThrow("Error");
    })

    it("sumar 1 + a va a arrojar error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        expect(() => sumar(operador1, operador2)).toThrow("Error");
    });

    it ("sumar sin parametros a arrojar error", () => {
        const operador1 = null;
        const operador2 = null;
        expect(() => sumar()).toThrow("Error");
    })

});

//Restar
describe("funcion restar", () => {
    it ("restar 2 -1 va a retornar 1", () => {
        //arrange
        const operador1 = 2;
        const operador2 = 1;

        //act
        const resultado = restar (operador1, operador2);

        //assert
        expect(resultado).toBe(1);
    });

});

//Multiplicar
describe ("Función multiplicar", () => {
    it ("multiplicar 2 * 2, va a retornar 4", () => {
        //arrange
        const operador1 = 2;
        const operador2 = 2;

        //act
        const resultado = multiplicar (operador1, operador2);

        //assert
        expect(resultado).toBe(4);
    });

    it ("multiplicar a + a, va a arrojar error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        expect(() => sumar(operador1, operador2)).toThrow();
    })

    it ("multiplicar sin parametros va a arrojar error", () => {
        expect(() => sumar()).toThrow();
    })

});

//Dividir
decribe("funcion dividir", () => {

    it ("dividir 2 por 1 va a retornar 2", () => {
        const operador1 = 1;
        const operador2 = 'a';
        const resultado = dividir (operador1, operador2);
        expect(resultado).toBe(2);
    });

    it("Dividir a por 1 va a arrojar error", () => {
        const operador1 = 'a';
        const operador2 = 1;
        expect(() => dividir(operador1, operador2)).toThrow("Error");
    })

    it("Dividir 2 por 0 va a arrojar error")
    const operador1 = 2;
    const operador2 = 0;
    const resultado = dividir (operador1, operador2);
    expect(resultado).toBe(0).toThrow("Error");
});

