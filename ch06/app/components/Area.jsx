let React = require('react');

class Area extends React.Component {

    constructor(props) {
        super(props);

        this.mouse = this.mouse.bind(this);
    }

    mouse(event) {
        console.log(event, this);
    }

    render() {
        return <div style={{border: '2px solid green', height: '50px'}}
            onMouseOverCapture={this.mouse} onMouseOver={this.mouse}
        >
            
        </div>
    }
}

module.exports = Area;