import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        console.log('count', React.Children.count(this.props.children))
        return (
            <div className="children">
                {this.props.children}
            </div>
        )
    }
}
