const {sum, nativeNull} = require('./intro');

// describe разбивает тесты по типам: сумма, null и прочее
describe('Sum function:', () => {
	test('should return sum of two values', () => {
		expect(sum(1, 3)).toBe(4);
		expect(sum(1, 3)).toEqual(4);
	});

	test('should return value correctly in comparison to other values', () => {
		expect(sum(2, 3)).toBeGreaterThan(4);
		expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
		expect(sum(2, 3)).toBeLessThan(10);
	});

	test('should sum two float numbers correctly', () => {
		expect(sum(2.01, 3)).toBeCloseTo(5.014);
	});
});

describe('Native null function:', () => {
	test('should return wrong value null', () => {
		expect(nativeNull()).toBe(null);
		expect(nativeNull()).toBeNull();
		expect(nativeNull()).toBeFalsy(); // это значения null, undefined, '', 0, false, NaN
		expect(nativeNull()).toBeDefined(); // null - определенное значение, это не undefined
		expect(nativeNull()).not.toBeTruthy();
		expect(nativeNull()).not.toBeUndefined();
	});
});
