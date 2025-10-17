const app = require('./app');

test('adds 2 and 3 to equal 5', () => {
    expect(app.add(2, 3)).toBe(5);
});

test('subtracts 5 and 3 to equal 2', () => {
    expect(app.subtract(5, 3)).toBe(2);
});

test('multiplies 4 and 3 to equal 12', () => {
    expect(app.multiply(4, 3)).toBe(12);
});

test('divides 10 by 2 to equal 5', () => {
    expect(app.divide(10, 2)).toBe(5);
});