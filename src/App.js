import React, {useReducer} from 'react';

import Logo from './components/Logo';
import Headline from './components/Headline';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';

import QuizContext from './context/QuizContext';

import {questionsLibrary} from "./components/QuestionFile";
import { resultComment } from "./components/ResultComments";


import './App.scss';

import { SET_ANSWERS, 
        SET_CURRENT_QUESTION,
        SET_CURRENT_ANSWER, 
        SET_ERROR, 
        SET_SHOW_RESULTS, 
        RESET_QUIZ } 
  from './reducers/types';

import quizReducer from './reducers/QuizReducer';

export default function App() {

  // let questions = createQuestionSet(questionsLibrary);
  let correctCount = 0;
  let displayComment;
  
  const createQuestionSet = (questions) => {
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
    let newQuestionSet = [];
    let questionsLength = questions.length;
    while (newQuestionSet.length < 5) {
      let randNum = getRandomInt(questionsLength);
      
      if (!newQuestionSet.includes(questions[randNum])) {
        newQuestionSet.push(questionsLibrary[randNum]);
      }
    }
    return newQuestionSet;
  };

  let questions = createQuestionSet(questionsLibrary);

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: '',
  };

 
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const {currentQuestion, currentAnswer, answers, showResults, error} = state;

  // eslint-disable-next-line
  const question = questions[currentQuestion];

  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error"> </div>;
  }

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      correctCount++;
      return <span className="correct" id="nowrap">Guessed Correctly</span>
    } 
    return <span className="failed" id="nowrap">Utter Failure</span> 
  }

  const createDisplayComment = () => {
    if (correctCount < 5) {
      displayComment = resultComment;
    } else {
      displayComment = "You have pleased the badger."
    }
    return displayComment;
  }

  const renderResultsData = () => {
    let comment = createDisplayComment();
    const mapAnswers = answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      );

      return (
        <div key={question.id}>
          {question.question} | {renderResultMark(question, answer)}
        </div>
      )
      });

    return (
      <div>
        <h4>You got {correctCount} correct. The Badger says:</h4>
        <h5>{comment}</h5>  
        <hr />
        {mapAnswers}
      </div>
    )
  };

  const restart = () => {
    dispatch({type: RESET_QUIZ});
  }

  const next = () => {
    const answer = {questionId: question.id, answer: currentAnswer};

    if (!currentAnswer) {
      dispatch({type: SET_ERROR, error: 'Select an option, dagnabbit!'})
      return;
    }
    
    answers.push(answer);

    dispatch({ type: SET_ANSWERS, answers});
    dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION, 
        currentQuestion: currentQuestion + 1
      });
      return;
    }
    dispatch({type: SET_SHOW_RESULTS, showResults: true});
  };

  if (showResults) {
    return (
      <div className="container results">
        <Logo />
        <Headline />
        <ul>
          {renderResultsData()}
        </ul>
        <button className="btn btn-primary" onClick={restart}>
          Start New Quiz
          </button>
      </div>

    )
  } else {
    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Logo />
          <Headline />
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers />

          <button className="btn btn-primary" onClick={next}>
            Confirm and continue
          </button>
        </div>
      </QuizContext.Provider>
    );
  }

};

