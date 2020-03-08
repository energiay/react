let React = require('react');

class Button extends React.Component {
    render() {
        return <button onClick={this.props.handler}>
            Подсчет кликов
        </button>
    }
}

module.exports = Button;