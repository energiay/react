import React, {Component} from 'react'

class Counter extends Component {
    render() {
        return <div className='container'>
            <button
                onClick={this.props.decreaseCount}
            >-</button>
            <span>{this.props.countVal}</span>
            <button
                onClick={this.props.increaseCount}
            >+</button>
        </div>
    }
}

export default Counter;