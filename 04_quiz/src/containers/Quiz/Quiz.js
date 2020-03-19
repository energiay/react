import React, {Component} from 'react';
import Classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz';

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        isFinish: false,
        quiz: [
            {
                question: 'Кто такой барсук?',
                rightAnswer: 1,
                answers: [
                    {text: 'Животное', id: 1},
                    {text: 'Человек', id: 2},
                    {text: 'Неведомая зверушка', id: 3},
                    {text: 'Не слышал о таком', id: 4}
                ]
            },
            {
                question: 'В каком году основали Воронеж?',
                rightAnswer: 3,
                answers: [
                    {text: '1300', id: 1},
                    {text: '1480', id: 2},
                    {text: '1586', id: 3},
                    {text: '1605', id: 4}
                ]
            }
        ]
    }

    onReloadClickHendler() {
        const newState = {...this.state}
        
        newState.activeQuestion = 0;
        newState.isFinish = false;
        newState.quiz.forEach((elem) => {
            elem.answerState = null
        });
        
        
        this.setState(newState);
    }

    nextQuestion(newState) {
        const timeoutId = window.setTimeout(() => {
            newState.activeQuestion++;
            this.setState( newState )
            window.clearTimeout(timeoutId);
        }, 1000);
    }

    onAnswerClickHendler = (answerId) => {
        const newState = {...this.state}
        const question = {...newState.quiz[this.state.activeQuestion]};

        // если ответ правильный
        if (question.rightAnswer === answerId) {            
            question.answerState = {[answerId]: 'success'};
            newState.quiz[this.state.activeQuestion] = question;
        } else {
            // ответ не правильный
            question.answerState = {[answerId]: 'error'};
            newState.quiz[this.state.activeQuestion] = question;
        }
        
        this.setState(newState);

        if (this.questionsFinished()) {
            const timeoutId = window.setTimeout(() => {
                this.setState({
                    isFinish: true
                });
                window.clearTimeout(timeoutId);
            }, 1000);
            return;
        }

        this.nextQuestion(newState)
    }

    questionsFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }


    render() {
        return (
            <div className={Classes.Quiz}>
                <div className={Classes.QuizWrapper}>
                    <h1>Опросник:</h1>
                    
                    {
                        (this.state.isFinish) 
                            ?   <FinishQuiz 
                                    quiz={this.state.quiz}
                                    onReloadClick={this.onReloadClickHendler.bind(this)}
                                />
                            :   <ActiveQuiz 
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    answerState={this.state.quiz[this.state.activeQuestion].answerState}
                                    quizLength={this.state.quiz.length}
                                    activeQuestion={this.state.activeQuestion + 1}
                                    onAnswerClick={this.onAnswerClickHendler}
                                />
                    }
                    
                </div>

            </div>
        )
    }
}

export default Quiz