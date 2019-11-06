import  { sumar, multiplicar, restar, dividir } from '../math';

describe('Calculos matematicos', () => {
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    } )
    test('Prueba de multiplica', ()=> {
        expect(multiplicar(1,1)).toBe(1);
    } )
    test('Prueba de resta', ()=> {
        expect(restar(1,1)).toBe(0);
    } )
    test('Prueba de divide', ()=> {
        expect(dividir(1,1)).toBe(1);
    } )
})