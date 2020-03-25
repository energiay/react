import React, { Component } from 'react'
import classes from './Button.module.css'

class Button extends Component {
    render() {
        return (
            <div>
                <button className={classes.Button}>{this.props.buttonName}</button>
            </div>
        )
    }
}
Button.defaultProps = { buttonName: 'Zhora' }

// Button.propTypes = {
//     handler: PropTypes.func.isRequired,
//     title: PropTypes.string,
//     email(props, propName, componentName) {
//         let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
//         if (!emailRegularExpression.test(props[propName])) {
//             return new Error('Email validation failed!')
//         }
//     }
// }

export default Button