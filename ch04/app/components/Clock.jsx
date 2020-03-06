var React = require('react');

class Clock extends React.Component { 
    constructor(props) {
      super(props)
      this.begin()
      
      this.state = {currentTime: this.getTime()}
    }

    getTime() {
        var date = new Date();
        let sHours = (date.getHours().toString().length   == 1) ? '0' + date.getHours()   : '' + date.getHours();
        let sMins =  (date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : '' + date.getMinutes();
        let sSecs =  (date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : '' + date.getSeconds();
        
        return sHours + ':' + sMins + ':' + sSecs;
    }

    begin() {
        setInterval( () => {
            
            this.setState({
                currentTime: this.getTime()
            });
        }, 1000);
    }
    
    render() {
      return <div>{this.state.currentTime}</div>
    }
  }

module.exports = Clock;