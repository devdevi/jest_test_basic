const TestRunner = require('jest-runner')

describe('Comparadores comunes', () => {
    const user = {
        name: 'Oscar',
        lastName: 'Barajas'
    }
    const user2 = {
        name: 'Oscarq',
        lastName: 'Barajas'
    }
    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    })
    test('!Igualdad de elementos', () => {
        expect(user).not.toEqual(user2)
    })
})