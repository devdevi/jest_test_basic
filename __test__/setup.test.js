// /despues de cada prueba
afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las prueba'));

// ANTES DE CADA PRUeBA
beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las prueba'));

describe('Preparar antes de ejecutar' ,() => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    })
})