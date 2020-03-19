import React from 'react';
import Classes from './AnswerItem.module.css';

const AnswerItem = props => {
    const cls = [Classes.AnswerItem];
    if (props.answerState) {
        cls.push(Classes[props.answerState]);
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={ () => {   
                props.onAnswerClick(props.answer.id)
            } }
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;