const form = document.querySelector('.quiz-form')
const resultDiv = document.querySelector('.result')

const correctAnswers = ['A','B','C','D']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25
        }
    })

    let counter = 0

    scrollTo(0, 100)

    resultDiv.classList.remove('d-none')

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        resultDiv.querySelector('span').textContent = `${counter}%`

        counter++
    }, 10)
})