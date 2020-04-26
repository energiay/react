import React from 'react'


class MenuButton extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        return false;
    }

    render() {
        console.log('MenuButton');
        return (
            <button
                id="roundButton"
                onMouseDown={this.props.handleMouseDown}
            >menu</button>
        )        
    }
}

// class MenuButton extends React.PureComponent {

//     render() {
//         console.log('MenuButton');
//         return (
//             <button
//                 id="roundButton"
//                 onMouseDown={this.props.handleMouseDown}
//             >menu</button>
//         )        
//     }
// }

// const MenuButton = (props) => {
//     console.log('MenuButton');
//     return (
//         <button
//             id="roundButton"
//             onMouseDown={props.handleMouseDown}
//         >menu</button>
//     )
// }

export default MenuButton
