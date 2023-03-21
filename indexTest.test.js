const countDays = require('./index.js')

test('Should return number of days', () => {
    expect(countDays(100, 50, 30)).toBe(5)
    expect(countDays(40, 25, 10)).toBe(2.33)
})

test('Check if a result is defined', () => {
    expect(countDays(130, 50, 30)).not.toBeUndefined()
})

test('Check if the result truthy or falsy', () => {
    expect(countDays(130, 50, 30)).toBeTruthy()
    expect(countDays(0, 50, 30)).toBeFalsy()
})

test('Should return the close floating-point arithmetic value', () => {
    expect(countDays(40, 25, 10)).toBeCloseTo(2.333)
})

test('Check if the result is not NaN', () => {
    expect(countDays(100, 50, 30)).not.toBeNaN()
})

test('Check if the result is not a string', () => {
    let regexp = /\w\w\w\w/
    expect(countDays(100, 50, 30)).not.toBe(regexp)
})

test('Check if the result not to be null', () => {
    expect(countDays(95, 30, 15)).not.toBeNull()
})