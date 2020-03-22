import React from 'react'
import Classes from './FinishQuiz.module.css'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'

const FinishQuiz = props => {
    let countSuccess = 0;
    return (
        <div className={Classes.FinishQuiz}>
            Опрос окончен.
            <ul>
                {
                    props.quiz.map((question, index) => {
                        const cls =  [];
                        if (question.answerState) {
                            const state = question.answerState[Object.keys(question.answerState)[0]];
                            cls.push('fa');
                            cls.push((state === 'error') ? 'fa-times' : 'fa-check');
                            cls.push(Classes[state]);

                            if (state === 'success') {
                                countSuccess++;
                            }
                        }

                        return (
                            <li key={index}>
                               <strong>{index+1}.</strong>&nbsp;
                               {question.question}
                               <i className={cls.join(' ')}/>
                            </li>
                        )
                    })
                }
            </ul>
            <div>Верно отвечено: {countSuccess} из {props.quiz.length}</div>
            <Link to='/'>
                <Button onReloadClick={props.onReloadClick} type="primary">Повторить</Button>
            </Link>
        </div>
    )
}

export default FinishQuiz