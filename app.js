const form = document.querySelector('.quiz-form')
const resultPopupWrapper = document.querySelector('.popup-wrapper')
const resultSentence = document.querySelector('#result-sentence')


const correctAnswers = ['B', 'B', 'B', 'B']
let score = 0


const getUserAnswers = () => {
    return [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
}

const checkAnswers = (userAnswer, index) => {
    const isAnswerCorrect = userAnswer === correctAnswers[index]
    const numberOfQuestions = correctAnswers.length 
    const maxScore = 100
    const pointsForGettingAnAnswerRight = maxScore / numberOfQuestions  
    
    if (isAnswerCorrect) {
        score += pointsForGettingAnAnswerRight
    }
}

const showResult = () => {
    resultSentence.textContent = `Sua pontuação foi ${score}/100`
    resultPopupWrapper.style.display = 'block'
}

const gradeQuizAndShowResult = event => {
    event.preventDefault()
    
    const userAnswers = getUserAnswers()
    score = 0

    userAnswers.forEach(checkAnswers)

    showResult()
}

const closeResultPopup = event => {
    const clickedElementClass = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-close-button']

    const shouldClosePopup = classNames.includes(clickedElementClass) 

    if (shouldClosePopup) {
        resultPopupWrapper.style.display = 'none'
    }
}


form.addEventListener('submit', gradeQuizAndShowResult)

resultPopupWrapper.addEventListener('click', closeResultPopup)