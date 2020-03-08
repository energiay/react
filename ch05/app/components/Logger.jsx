var React = require('react');

class Logger extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {test: ''};
    }

    componentWillMount() {
        console.log('Перед подключением к DOM');
    }
    
    componentDidMount(event) {
        console.log('После подключения и рендера');
        console.log('event', event);

        this.setState(
            {test: 'test'}
        );
    }
    
    componentWillReceiveProps(newProps) {
        console.log('!!! перед получением свойств компонента');
        console.log('new props: ', newProps);
    }
    
    shouldComponentUpdate(newProps, newState) {
        console.log('позволяет оптимизировать повторный рендеринг компонента');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log('происходит непосредственно перед обновлением компонента');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('происходит сразу после обновления компонента');
        console.log('old props: ', oldProps);
        console.log('old state: ', oldState);
    }

    componentWillUnmount() {
        console.log('позволяет отключить любые слушатели событий или провести завершающие действия перед отключением компонента');
    }
    


    render() {
        console.log('begin rendering...')
        return <div>{this.props.time + ' => ' + this.state.test}</div>
    }
}

module.exports = Logger;