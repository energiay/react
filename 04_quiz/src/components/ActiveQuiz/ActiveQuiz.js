import React from 'react';
import Classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className={Classes.ActiveQuiz}>
        <p className={Classes.Question}>
            <span>
            <strong>{props.activeQuestion}.</strong>&nbsp;
                {props.question}
            </span>

        <small>{props.activeQuestion} из {props.quizLength}</small>
        </p>

        <AnswersList 
            answers={props.answers}
            answerState={props.answerState}
            onAnswerClick={props.onAnswerClick}
        />

    </div>

)

export default ActiveQuiz;