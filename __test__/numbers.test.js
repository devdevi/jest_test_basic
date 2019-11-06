import { numbers } from '../numbers';

// .toBeGreaterThan(value)
// .toBeGreaterThanOrEqual(value)

// .toBeLessThan(value)
// .toBeLessThanOrEqual(value)

// .toBeCloseTo(value)

describe('Comparar numeros', () => {
    test('Mayor que ', () => {
        expect(numbers(2,3)).toBeGreaterThan(4);
    })
    test('toBeGreaterThanOrEqual ', () => {
        expect(numbers(2,3)).toBeGreaterThanOrEqual(5);
    })
    test('toBeLessThan', () => {
        expect(numbers(2,3)).toBeLessThan(8);
    })
    test('toBeLessThanOrEqual', () => {
        expect(numbers(2,3)).toBeLessThanOrEqual(5);
    })
    test('FLotantes', () => {
        expect(numbers(2.4,3.666)).toBeCloseTo(6.066);
    })
})