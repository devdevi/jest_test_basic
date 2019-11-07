import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Fallar el snapshot', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Alejandro González Reyes',
            profesion: 'JavaScript and PHP Development',
            createdAt: new Date()
          }
    expect(user).toMatchSnapshot({
            id: expect.any(Number),
            createdAt: expect.any(Date)
        });
    })
})