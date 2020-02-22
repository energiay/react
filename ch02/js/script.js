class HelloWord extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hi, ' + this.props.name + '!'
        )
    }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(
            HelloWord, {
                id: 'id1',
                name: 'name1',
                title: 'title1'
            }            
        ),
        React.createElement(
            HelloWord, {
                id: 'id2',
                name: 'name2',
                title: 'title2'
            }            
        ),
        React.createElement(
            HelloWord, {
                id: 'id3',
                name: 'name3',
                title: 'title3'
            }            
        )
    ),
    document.getElementById('content')
)