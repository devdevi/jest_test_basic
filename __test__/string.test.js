describe('Comprobar cadenas de texto', () => {
    const msg = 'Un bonito texto';
    test('Debe contener el siguiente texto', () => {
        expect(msg).toMatch(/bonito/);
    })

    test('NO debe contener el siguiente texto', () => {
        expect(msg).not.toMatch("bonitos");
    })

    test('Comprobar el tamaño', () => {
        expect(msg).toHaveLength(15);
    })
})