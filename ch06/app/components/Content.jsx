let React = require('react');
let Button = require('./Button.jsx')
let Counter = require('./Counter.jsx')

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({counter: ++this.state.counter});
    }

    render() {
        return <div style={{marginTop: '25px'}}>
            <Button handler={this.handleClick}/>
            <br/>
            <Counter count={this.state.counter}/>
        </div>
    }

}

module.exports = Content;