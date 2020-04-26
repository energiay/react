import React from 'react';
import MenuButton from './MenuButton'
import Menu from './Menu'

class MenuContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu() {
        
        console.log('clicked');
        this.setState({
            visible: !this.state.visible
        });
    }


    render() {
        console.log('MenuContainer');
        return (
            <div>
                <div>
                    <MenuButton handleMouseDown={this.handleMouseDown}/>
                    <Menu 
                        handleMouseDown={this.handleMouseDown}
                        menuVisibility={this.state.visible}
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li>Lorem</li>
                        <li>ipsum</li>
                        <li>dolor</li>
                        <li>sit</li>
                        <li>amet</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer
