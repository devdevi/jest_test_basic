import { isNull, isFalse, isTrue, isUndefined } from '../true';
import { exec } from 'child_process';

describe('Probar resultados nulos', () => {
    test('is Null', () => {
        expect(isNull()).toBeNull()
    })
})

describe('Probar is true', () => {
    test('is True', () => {
        expect(isTrue()).toBeTruthy()
    })
})
describe('is false', () => {
    test('is False', () => {
        expect(isFalse()).toBeFalsy()
    })
})
describe('is Undefined', () => {
    test('is undefined', () => {
        expect(isUndefined()).toBeUndefined()
    })
})