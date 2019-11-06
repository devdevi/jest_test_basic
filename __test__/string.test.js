describe('Comprobar cadenas de texto', () => {

    const msg = 'Un bonito texto';
    test('Debe contener el siguiente texto', () => {
        expect(msg).toMatch(/bonito/);
    })
})