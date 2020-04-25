import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
        var visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }
        
        return <div id="flyoutMenu"
            onMouseDown={this.props.handleMouseDown}
            className={visibility}
        >
            <h2>Fiald 1</h2>
            <h2>Fiald 2</h2>
            <h2>Fiald 3</h2>
            <h2>Fiald 4</h2>
            <h2>Fiald 5</h2>
        </div>
    }
}

export default Menu;