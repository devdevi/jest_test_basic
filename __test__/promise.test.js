import { getDataFromApi,  getDatapi } from  '../promise'

describe('Probando promesas', () => {
    test('Realizando una peticion a una api', done => {
        const api = 'https://rickandmortyapi.com/api/character'
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })

    // const api = 'https://rickandmortyapi.com/api/character';

    // test('Realizando una peticion a una api async', async ( done ) => {
    //     const res = await  getDatapi(api);
    //     expect(data.results.length).toBeGreaterThan(0)
    //     done()
    // })
    test('Resuelve un hola', () => {
        return expect(Promise.resolve('HOLA')).resolves.toBe('HOLA');
    })
})