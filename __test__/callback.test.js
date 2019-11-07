import  { callbackHell } from '../callback';

describe('Probando un callback', () => {
    test('Callback', done => {
        function otherCallBack(data) {
            expect(data).toBe('Hola javascripters')
            done();
        }
        callbackHell(otherCallBack);
    })
})