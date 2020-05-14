import React, {useContext} from 'react';
import QuizContext from '../context/QuizContext';

export default function Question() {
    const { state} = useContext(QuizContext);
    const { currentQuestion, questions } = state;
    const question = questions[currentQuestion];

    return (
        <h1 className="question-text">{question.question}</h1>
    );
}
