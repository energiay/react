let React = require('react');

class Seconds extends React.Component {
    render() {
        return <div>
          Seconds: {this.props.seconds}  
        </div>
    }
}

module.exports = Seconds;