const form = document.querySelector('.quiz-form')
const resultPopupWrapper = document.querySelector('.popup-wrapper')
const resultSentence = document.querySelector('#result-sentence')

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

    resultSentence.textContent = `Sua pontuação foi ${100 / correctAnswers.length}/100`
    resultPopupWrapper.style.display = 'block'
})

resultPopupWrapper.addEventListener('click', event => {
    const clickedElementClass = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-close-button']

    if (classNames.includes(clickedElementClass)) {
        resultPopupWrapper.style.display = 'none'
    }
})