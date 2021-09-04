const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A','B','C','D']

let score = 0

const getUserAnswers = () => {
    return correctAnswers.map((_, index) => 
    form[`inputQuestion${index + 1}`].value)
}

const calculateUserScore = userAnswers => {
    score = userAnswers.reduce((accumulator, answer, index) => {
        const isAnswerCorrect = answer === correctAnswers[index]

        return isAnswerCorrect ? accumulator += 25 : accumulator
    }, 0)
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0


    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()


    //obtém as respostas do usuário
    const userAnswers = getUserAnswers()

    // calcula a pontuação do usuário
    calculateUserScore(userAnswers)
    
    // exibe a pontuação final
    showFinalScore()
    
    // anima pontuação final
    animateFinalScore()
})