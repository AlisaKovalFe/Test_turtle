// Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м. Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз. На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать ответ в консоли. Затем написать минимум 5 тестов к этой задаче.

const countDays = (wayLength, up, down) => {
    let numberDays = 0
    let i

    if (down >= up) return numberDays = 'Черепашка никогда не сможет забраться на гору'
    if (wayLength == 0) return numberDays = 'Черепашка отдохни, тебе никуда не нужно ползти'

    for (i = up - down; i <= wayLength; i += up - down) {
        numberDays++
        if (i + up >= wayLength) {
            numberDays++
            return numberDays
        }
    }

    if (i > wayLength) {
        numberDays += Math.round((i - wayLength) / (up - down) * 100 / 100 * 24)
        return 'Черепашка залезет на холм меньше, чем за один сутки, а именно ' + numberDays + ' часов приблизительно'
    }
}


module.exports = countDays