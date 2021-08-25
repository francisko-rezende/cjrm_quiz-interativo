const form = document.querySelector('.quiz-form')
const quizContainer = document.querySelector('.quiz')

const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()
    
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    let score = 0

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 100 / correctAnswers.length
        }
    })

    quizContainer.innerHTML = `<h2 class="dark-text">Você fez ${score} pontos</h2>`
})
