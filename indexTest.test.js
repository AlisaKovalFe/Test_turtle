const countDays = require('./index.js')

test('Should return number of days', () => {
    expect(countDays(100, 50, 30)).toBe(4)
    expect(countDays(40, 25, 10)).toBe(2)
    expect(countDays(5, 9, 2)).toBe('Черепашка залезет на холм меньше, чем за один сутки, а именно ' + 7 + ' часов приблизительно')
    expect(countDays(0, 50, 30)).toBe('Черепашка отдохни, тебе никуда не нужно ползти')
    expect(countDays(120, 30, 30)).toBe('Черепашка никогда не сможет забраться на гору')
})

test('Check if a result is defined', () => {
    expect(countDays(130, 50, 30)).not.toBeUndefined()
})

test('Check if the result truthy', () => {
    expect(countDays(130, 50, 30)).toBeTruthy()
})

test('Check if the result is not NaN', () => {
    expect(countDays(100, 50, 30)).not.toBeNaN()
})

test('Check if the result is not a string', () => {
    let regexp = /ˆ[а-яА-ЯёЁa-zA-Z]+s$/
    let result = countDays(120, 30, 30).match(regexp)
    expect(countDays(100, 50, 30)).not.toBe(result)
})

test('Check if the result not to be null', () => {
    expect(countDays(95, 30, 15)).not.toBeNull()
})