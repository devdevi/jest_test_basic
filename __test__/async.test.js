import 'babel-polyfill';
import { getDataFromApi } from '../promise'


describe('Probar Async/Await', () => {
    test('Realizar una peticion a una api', async  () => {
        const api = 'https://rickandmortyapi.com/api/character'
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        })
    })

    test('Realizar una peticion a una api con error', async  () => {
        const api = 'http://httpstat.us/404'
        const  results  = await getDataFromApi(api);
        console.log(results[Error])
        // await expect(results).toEqual(Error('Request failed with status code 404'))
        expect(results).toEqual(Error('Request failed with status code 404'))

    })
    test('Reject hola', async () => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    })
})

describe('Testing using promises with async/await', () => {
	test('Calling an API', async () => {
		const { results } = await getDataFromApi('https://rickandmortyapi.com/api/character/')
		expect(results.length).toBeGreaterThan(0);
		const { name } = await getDataFromApi('https://rickandmortyapi.com/api/character/1')
		expect(name).toEqual('Rick Sanchez');
	})
})