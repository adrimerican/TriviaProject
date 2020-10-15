
import React, { useState } from 'react';
import './App.css';
import '../app.css';
import './game.css';
import axios from 'axios';

export default function App() {
   const [question, setQuestion] = useState[0];
    const [choiceText, setChoiceText] = setState();// Can just pass a onclick instead of this.
    const [progressText, setProgressText] = useState();
    const [scoreText, setScore] = useState(0); //insdie of compo return put {} instead. Coming from state on load. 
    const [progressBarFull, setProgressBarFull] = useState(0);
    const [loader, setLoader] = useState();
    const [game, setGame] = useState(true);

    let currentQuestion = {}; 
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuesions = [];
    let questions = [];
    //create inside of state
    //need to be inside of state
    //this.state
    const [questions, Question] = useState({
			api: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple',
			question: []
		  });
		  
		  useEffect(() => {
			getApi();
		  }, [])
		  
		  const getApi = async () => {
        const res = await axios.get('https://opentdb.com/api.php?amount=10')
         .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };
    
                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );
    
                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                })
                    startGame();
        })
        .catch((err) => {
            console.error(err);
        });
    
                return formattedQuestion;
            });
			  console.log(res.data)

		  },
       
    
        
    
    //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 10;
    
    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuesions = [...questions];
        getNewQuestion();
        game.classList.remove('hidden');
        loader.classList.add('hidden');
    };
    
    getNewQuestion = () => {
        if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            return window.location.assign('/end.html');
        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerHTML = currentQuestion.question;
    
        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerHTML = currentQuestion['choice' + number];
        });
    
        availableQuesions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };
    
    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;
    
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];
    
            const classToApply =
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    
            if (classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }
    
            selectedChoice.parentElement.classList.add(classToApply);
    
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });
    
    incrementScore = (num) => {
        score += num;
        scoreText.innerText = score;
    };
    return (
        <div className='App'>
   
   
  <body>
    <div class="container">
      <div id="loader"></div>
      <div id="game" class="justify-center flex-column hidden">
        <div id="hud">
          <div id="hud-item">
            <p id="progressText" class="hud-prefix">
              Question
            </p>
            <div id="progressBar">
              <div id="progressBarFull"></div>
            </div>
          </div>
          <div id="hud-item">
            <p class="hud-prefix">
              Score
            </p>
            <h1 class="hud-main-text" id="score">
              0
            </h1>
          </div>
        </div>
         <h2 id="question"></h2>
        <div class="choice-container">
          <p class="choice-prefix">A</p>
          <p class="choice-text" data-number="1"></p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">B</p>
          <p class="choiceText" data-number="2"></p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">C</p>
          <p class="choice-text" data-number="3"></p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">D</p>
          <p class="choice-text" data-number="4"></p>
        </div>
      </div>
    </div>
  </body>
        </div>
      );  
}


