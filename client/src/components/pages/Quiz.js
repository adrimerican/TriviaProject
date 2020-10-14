import React from 'react';
import axios from "axios"
import NavbarR from '../NavbarR';
import Timer from '../Timer'

function Quiz() {



const getQuestionsFromAPI = async () => {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10')//instead of hard coded, have `` to change state choice.
        return response.data.results
    } catch (err) {
        console.log(err)
    }
}
//select drop down, once clicked on diff optoin, save value on state (diff cata for diff api).
//once stored on state. on change event can run fuction. grab current val and update on state

const decodeHTML = (html) => {
    var txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
}

const formatChoices = choices => {
    return choices.map((choice, index) => {
        return { text: decodeHTML(choice.trim()) }
    })
    
}
const combineAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)

questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
const formatQuestion = (question, index) => {
    return {
        id: index,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        text: decodeHTML(question.question.trim()),
        choices: formatChoices(combineAllChoices(question)),
        correct: decodeHTML(question.correct_answer.trim()),
        incorrect: question.incorrect_answers
    }
}

const formatAPIQuizData = questions => {
    return questions.map((question, index) => {
        return formatQuestion(question, index)
    })
}

const createQuizData = async () => {
    try {
        const questions = await getQuestionsFromAPI()
        const formattedQuestions = await formatAPIQuizData(questions)
        return formattedQuestions
    } catch (err) {
        console.log(err)
    }
}

export { createQuizData }
    return (
        <div>
            <NavbarR/>
            <h1>Here's the quiz page</h1>
            <Timer/>
        </div>
    )
}

export default Quiz
