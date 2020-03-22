import React, {Component} from 'react';
import Classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishQuiz from '../../components/FinishQuiz/FinishQuiz';
import {withRouter} from 'react-router-dom'

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
        
        let activeQuestion = newState.activeQuestion;
        if (this.props.match.params.number) {
            activeQuestion = this.props.match.params.number;
        }
        
        const question = {...newState.quiz[activeQuestion]};

        // если ответ правильный
        if (question.rightAnswer === answerId) {            
            question.answerState = {[answerId]: 'success'};
            newState.quiz[activeQuestion] = question;
        } else {
            // ответ не правильный
            question.answerState = {[answerId]: 'error'};
            newState.quiz[activeQuestion] = question;
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

        if (!this.props.match.params.number) {
            this.nextQuestion(newState)
        }

    }

    questionsFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    getQuestion(url) {
        var arrResult = url.match(/\d+/) || [];
        var iResult = parseInt(arrResult.join(''));
        if (!isNaN(iResult) && iResult !== this.state.activeQuestion) {
            this.setState({
                isFinish: false,
                activeQuestion: iResult
            });
        }
    }


    render() {
        let resultPage = this.state.isFinish;
        if (this.props.isFinish !== undefined) {
            resultPage = this.props.isFinish
        }

        let activeQuestion = this.state.activeQuestion;
        if (this.props.match.params.number) {
            activeQuestion = parseInt(this.props.match.params.number);
        }

        return (
            <div className={Classes.Quiz}>
                <div className={Classes.QuizWrapper}>
                    <h1>Опросник:</h1>
                    
                    {
                        (resultPage) 
                            ?   <FinishQuiz 
                                    quiz={this.state.quiz}
                                    onReloadClick={this.onReloadClickHendler.bind(this)}
                                />
                            :   <ActiveQuiz 
                                    answers={this.state.quiz[activeQuestion].answers}
                                    question={this.state.quiz[activeQuestion].question}
                                    answerState={this.state.quiz[activeQuestion].answerState}
                                    quizLength={this.state.quiz.length}
                                    activeQuestion={activeQuestion + 1}
                                    onAnswerClick={this.onAnswerClickHendler}
                                />
                    }
                    
                </div>

            </div>
        )
    }
}

export default withRouter(Quiz)