let ReactDOM = require('react-dom');
let React = require('react');
let Logger = require('./components/Logger.jsx');
let Seconds = require('./components/Seconds.jsx');


let secondsLeft = 5

let interval = setInterval(() => {
    if (secondsLeft == 0) {
        ReactDOM.render(
            <div>
                <Logger time="testing actions"/>
            </div>,
            document.getElementById('app')
        )
        clearInterval(interval)
    } else {
        ReactDOM.render(
            <div>
                <Logger time="testing actions"/>
                <Seconds seconds={secondsLeft}/>
            </div>,
            document.getElementById('app')
        )
    }
    secondsLeft--
}, 1000)