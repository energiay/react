var ReactDOM = require('react-dom');
var React = require('react');
var Area = require('./components/Area.jsx');
var Content = require('./components/Content.jsx');
 
ReactDOM.render(
    <div>
        <Area/>
        <Content/>
    </div>,
    document.getElementById("app")
)