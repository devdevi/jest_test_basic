import { arrayColors, arrayFruits } from '../arrays';

describe('Comprobaremos existente', () => {
    test('Tiene una manzana?', () => {
        expect(arrayFruits()).toContain('manzana');
    })
})

describe('Comprobaremos que no tiene elemento', () => {
    test('No tiene azul', () => {
        expect(arrayColors()).not.toContain('Azul')
    })
})

describe('Comprobaremos tammaño arreglo', () => {
    test('array de 5 elementos', () => {
        expect(arrayColors()).toHaveLength(4)
    })
})