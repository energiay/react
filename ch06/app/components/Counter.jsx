let React = require('react');

class Counter extends React.Component {
    render() {
        return <span>Сделано кликов: {this.props.count}</span>
    }
}

module.exports = Counter;